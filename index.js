const fs = require("fs");
// const mongoose = require("mongoose");
// const TelegramBot = require("node-telegram-bot-api");

function notifyConfigError(){
    console.log('Please update config.json with real data');
    process.exit();
}

try {
    // Si no existe el archivo de configuración, se crea
    fs.writeFileSync('config.json',
        '{\n\t"BOT_TOKEN": "token",\n\t"EMAIL": "email",\n\t"EMAIL_PASSWORD": "password"\n}', {flag: 'wx'});
    notifyConfigError();
} catch(e) {
    const config = require("./config.json");
    if(config.BOT_TOKEN === "token" || config.EMAIL === "email") {
        notifyConfigError()
    }
}

const bot = new TelegramBot(config.BOT_TOKEN, { polling: true });

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
