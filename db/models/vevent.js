const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VeventSchema = new Schema({
  uid: { type: Number, unique: true, require: true, dropDups: true },
  organizer: String,
  atendee: String,
  summary: String,
  dtstamp: String,
  dtstart: Date,
  sequence: String,
  optional: String
});

const Vevent = mongoose.model("Vevent", VeventSchema);

module.exports = Vevent;
