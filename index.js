const TelegramBot = require("node-telegram-bot-api");
const token = "639161831:AAEKUFoQe6w1nudl-Oeyru7CLyGkaue5hQ4";
const bot = new TelegramBot(token, { polling: true });
const mongoose = require("mongoose");
const {
  register,
  confirmUser,
  isAuth
} = require("./authentication/controllers/register");

mongoose.connect(
  "mongodb://localhost/icalendar",
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
