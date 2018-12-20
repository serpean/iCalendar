const mongoose = require("mongoose");
const TelegramBot = require("node-telegram-bot-api");
const { isConfigOK } = require("./config/checker");

if(!isConfigOK()){
    console.error('Please update config file with real data');
    process.exit(1);
} else {
    const config = require("./config/config.json");
}

const bot = new TelegramBot(config.BOT_TOKEN, { polling: true });

const {
  register,
  confirmUser,
  isAuth,
  changeEmail
} = require("./authentication/controllers/register");

mongoose.connect(
  config.MONGO_URI,
  { useNewUrlParser: true }
);

let email;
bot.onText(/\/register (.+)/, (msg, match) => {
  // TODO: Verify real email
  email = match[1];
  register(msg.from.id, email)
    .then(res => {
      bot.sendMessage(msg.chat.id, res);
    })
    .catch(err => {
      bot.sendMessage(msg.chat.id, err);
    });
});

bot.onText(/\/changemail (.+)/, (msg, match) => {
  // TODO: Verify real email
  email = match[1];
  changeEmail(msg.from.id, email)
    .then(res => {
      bot.sendMessage(msg.chat.id, res);
    })
    .catch(err => {
      bot.sendMessage(msg.chat.id, err);
    });
});

let confirmationToken;
bot.onText(/\/confirm (.+)/, (msg, match) => {
  confirmationToken = match[1];
  confirmUser(msg.from.id, confirmationToken)
    .then(res => {
      bot.sendMessage(msg.chat.id, res);
    })
    .catch(err => {
      bot.sendMessage(msg.chat.id, err);
    });
});

bot.onText(/\/prueba/, msg => {
  isAuth(msg.chat.id)
    .then(auth => {
      return bot.sendMessage(msg.chat.id, "Tu email es " + auth);
    })
    .catch(err => {
      return bot.sendMessage(msg.chat.id, err);
    });
});
