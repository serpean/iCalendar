const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VtodoSchema = new Schema({
  uid: { type: Number, unique: true, require: true, dropDups: true },
  organizer: String,
  atendee: String,
  summary: String,
  dtstamp: String,
  dtstart: String,
  priority: String,
  sequence: String,
  optional: String
});

const Vtodo = mongoose.model("Vtodo", VtodoSchema);

module.exports = Vtodo;
