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
    console.log(TempVevent.dtstart);
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
    Vevent.findOne({ uid: uid }).exec((err, event) => {
      if (err) reject(err);
      // TODO: quitar _id
      resolve(event);
    });
  });
};

/**
 * Get Vevents give a day
 * @param {Date} date
 */
const findVeventByDay = date => {
  return new Promise((resolve, reject) => {
    Vevent.find({
      dtstart: new Date(date)
    })
      .select("uid organizer dtstart")
      .exec((err, events) => {
        if (err) reject(err);
        resolve(events);
      });
  });
};

/**
 * Get Vevents give a month
 * @param {Date} date
 */
const findVeventsByMonth = date => {
  return new Promise((resolve, reject) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    let gDate = new Date(year, month + 1, 1, 1, 0);
    if (month == 11) {
      gDate = new Date(year + 1, 0, 1, 1, 0);
    }
    const lDate = new Date(year, month, 1, 1, 0);
    Vevent.find({
      dtstart: {
        $lte: new Date(gDate),
        $gte: new Date(lDate)
      }
    })
      .select("uid organizer dtstart")
      .exec((err, events) => {
        if (err) reject(err);
        resolve(events);
      });
  });
};

/**
 * Get all eventss
 */
const findVevents = () => {
  return new Promise((resolve, reject) => {
    Vevent.find({}).exec((err, res) => {
      if (err) reject(err);
      resolve(res);
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
  deleteVEvent,
  findVeventsByMonth,
  findVevents,
  findVeventByDay
};
