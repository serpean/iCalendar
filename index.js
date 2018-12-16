const config = require("./config.json");
const token = config.BOT_TOKEN;
const mongoose = require("mongoose");
/*
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
});*/
const Calendar = require('./calendarUI/calendarUI');

const Telegraf = require('telegraf')
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Markup = require('telegraf/markup')
const WizardScene = require('telegraf/scenes/wizard')

const bot = new Telegraf(token);

bot.command("addevent", ctx => 
  {
    ctx.reply('Primero tenemos que comprobar que estas autenticado', Markup.inlineKeyboard([
      Markup.callbackButton('➡️ Autenticar', 'auth')
]).extra())
    bot.use(addEventStage.middleware())
  });

const stepTituloAddEventHandler = new Composer()
stepTituloAddEventHandler.use((ctx) => {
  ctx.scene.session.infoEvent[2] = ctx.message.text;
  ctx.replyWithMarkdown('El Título es:`' + ctx.message.text + '`', Markup.inlineKeyboard([
    Markup.callbackButton('➡️ Correcto', 'next')
]).extra())
  return ctx.wizard.next()
});

const calendarHandler = new Composer()
calendarHandler.action(/calendar-telegram-date-[\d-]+/g, ctx => {
    let date = ctx.match[0].replace("calendar-telegram-date-", "");
    ctx.scene.session.infoEvent[0] = date;
    ctx.replyWithMarkdown('La Fecha es:`' + date + '`', Markup.inlineKeyboard([
      Markup.callbackButton('➡️ Correcto', 'next')
  ]).extra())
    return ctx.wizard.next()
});

const addEventWizard = new WizardScene('addevent-wizard',
(ctx) => {
  //Estructura de Event  ['dtstamp','dtstart','organizer','summary','uid']
  ctx.scene.session.infoEvent = ['dtstart','organizer','summary']
  /*
  isAuth(msg.chat.id)
  .then(auth => {
    ctx.scene.session.infoEvent[1] = auth;
    return ctx.wizard.next()
  })
  .catch(err => {
    ctx.reply("Debes de estar autenticado para realizar esta acción")
    return ctx.scene.leave()
  });*/
  //Estas tres lineas se borran cuando funcione lo de arriba
  ctx.reply("Todo Correcto. Indica el Título del Evento")
  ctx.scene.session.infoEvent[1] = 'john@d.oe'
  return ctx.wizard.next();
},
stepTituloAddEventHandler,
(ctx) => {
  
  const calendar = new Calendar(bot, {
    startWeekDay: 1,
    weekDayNames: ["L", "M", "X", "J", "V", "S", "D"],
    monthNames: [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ]
  });
      const today = new Date();
      const minDate = new Date();
      const maxDate = new Date();
      maxDate.setMonth(today.getMonth() + 1);
      maxDate.setDate(today.getDate());
      calendar.setMaxDate(maxDate);
      calendar.setMinDate(minDate);
      calendar.setDateListener((context, date) => context.reply(date));
      ctx.reply("Elige un día para el nuevo evento", calendar.getCalendar())
      return ctx.wizard.next()
    },
    calendarHandler
    ,
    (ctx) => {
      ctx.reply('Evento `' + ctx.scene.session.infoEvent[2] + '` creado el día `' + ctx.scene.session.infoEvent[0] + '`')
      //Llamo al método de Dani pasando como parámetro Titulo = summary = infoEvent[2], Fecha = dtsart = infoEvent[0], Email = organiser = infoEvent[1]
      vEventPub(infoEvent[0], infoEvent[1], infoEvent[2])
      return ctx.scene.leave()
    }
) 

const addEventStage = new Stage([addEventWizard], { default: 'addevent-wizard' })
bot.use(session())
bot.startPolling()