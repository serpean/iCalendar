const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VeventSchema = new Schema({
  uid: { type: String, unique: true, require: true, dropDups: true },
  organizer: String,
  atendee: String,
  summary: String,
  dtstamp: String,
  dtstart: String,
  sequence: String,
  optional: String
});

const Vevent = mongoose.model("Vevent", VeventSchema);

module.exports = Vevent;
