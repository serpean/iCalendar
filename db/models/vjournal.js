const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VjournalSchema = new Schema({
  uid: { type: String, unique: true, require: true, dropDups: true },
  organizer: String,
  description: String,
  dtstamp: String,
  dtstart: String,
  sequence: String,
  optional: String
});

const Vjournal = mongoose.model("Vjournal", VjournalSchema);

module.exports = Vjournal;
