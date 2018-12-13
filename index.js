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
  isAuth
} = require("./authentication/controllers/register");

mongoose.connect(
  config.MONGO_URI,
  { useNewUrlParser: true }
);

let email;
bot.onText(/\/register (.+)/, (msg, match) => {
  // TODO: Verify real email
  email = match[1];
  register(msg.from.id, email, res => {
    bot.sendMessage(msg.chat.id, res);
  });
});

let confirmationToken;
bot.onText(/\/confirm (.+)/, (msg, match) => {
  confirmationToken = match[1];
  confirmUser(msg.from.id, confirmationToken, res => {
    bot.sendMessage(msg.chat.id, res);
  });
});

bot.onText(/\/prueba/, msg => {
  isAuth(msg.chat.id, auth => {
    if (auth) {
      return bot.sendMessage(msg.chat.id, "Tu email es " + auth);
    } else {
      return bot.sendMessage(msg.chat.id, "No puedes pasar");
    }
  });
});
