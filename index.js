const TelegramBot = require("node-telegram-bot-api");
const config = require("./config.json");
const token = config.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const mongoose = require("mongoose");
const {
  register,
  confirmUser,
  isAuth,
  changeEmail
} = require("./authentication/controllers/register");

mongoose.connect(
  "mongodb://localhost/icalendar",
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
