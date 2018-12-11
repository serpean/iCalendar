const nodemailer = require("nodemailer");

const sendEmail = (user, token) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "ssrjcalendar@gmail.com", // generated ethereal user
      pass: "Serpean1" // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "noreply <ssrjcalendar@gmail.com>", // sender address
    to: user, // list of receivers
    subject: "JCalendar email confirm", // Subject line
    text: "Token: " + token, // plain text body
    html: "<b>Token " + token + "</b>" // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};

module.exports = {
  sendEmail
};
