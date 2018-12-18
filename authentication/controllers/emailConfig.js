const nodemailer = require("nodemailer");
const config = require("../../config.json");

/**
 *
 * @author serpean
 */

/**
 *
 * @param {Receiver email} user
 * @param {Confirmed email} token
 */
const sendEmail = (user, token) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.EMAIL, // generated ethereal user
      pass: config.EMAIL_PASSWORD // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "noreply <ssrjcalendar@gmail.com>", // sender address
    to: user, // list of receivers
    subject: "JCalendar email confirm", // Subject line
    text: "Token: " + token, // plain text body
    html: `<h1>Confirma tu e-mail</h1><br />
    <h3>Envía "/confirm token" al bot para poder confirmar tu dirección de correo electrónico (siendo "token" el token que se te indica a continuación).</h3>
    <br /><b>Token: ${token}</b>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
};

module.exports = {
  sendEmail
};
