const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VfreebusySchema = new Schema({
  uid: { type: Number, unique: true, require: true, dropDups: true },
  organizer: String,
  atendee: String,
  dtstamp: String,
  dtstart: String,
  dtend: String,
  optional: String
});

const Vfreebuse = mongoose.model("Vfreebusy", VfreebusySchema);

module.exports = Vfreebuse;
