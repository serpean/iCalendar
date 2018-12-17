const Vevent = require("../models/vevent");

/**
 * Save Vevent on the database
 *
 * @param {{uid, summary, organizer, dtstart, dtstamp}} params
 */
const saveVEvent = params => {
  return new Promise((resolve, reject) => {
    let TempVevent = new Vevent();
    TempVevent.uid = params.uid;
    TempVevent.summary = params.summary;
    TempVevent.organizer = params.organizer;
    TempVevent.dtstart = params.dtstart;
    TempVevent.dtstamp = params.dtstamp;

    TempVevent.save(err => {
      if (err) {
        console.log(err);
        reject("No se pudo guardar el evento");
      }
      resolve(params.uid);
    });
  });
};

/**
 * Find a Vevent by the uid
 *
 * @param {Number} uid
 */
const findVEvent = uid => {
  return new Promise((resolve, reject) => {
    Vevent.find({ uid: uid }).exec((err, event) => {
      if (err) reject(err);
      resolve(event);
    });
  });
};

/**
 * Delete a Vevent by uid
 *
 * @param {Number} uid
 */
const deleteVEvent = uid => {
  return Promise((resolve, reject) => {
    Vevent.findOneAndDelete({ uid: uid }).exec((err, event) => {
      if (err) reject(err);
      resolve(event);
    });
  });
};

module.exports = {
  saveVEvent,
  findVEvent,
  deleteVEvent
};
