const vevent = require("../db/controllers/vevent");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/icalendar",
  { useNewUrlParser: true }
);
// vevent
//   .find()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

const fecha = new Date("2018-12-18");
vevent
  .findVeventsByMonth(fecha)
  .then(events => {
    events.forEach(element => {
      return console.log(element);
    });
  })
  .catch(err => console.log(err));
