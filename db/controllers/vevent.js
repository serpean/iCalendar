const Vevent = require("../models/vevent");

/**
 * Save Vevent on the database
 *
 * @param {{uid, summary, organizer, dtstart, dtstamp, optional}} params
 * @param {{string}} [params.optional=void]
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
    if (params.optional != "void") TempVevent.optional = params.optional
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
    // TODO: More than one pearson
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let gDate = new Date(year, month, day, 23, 59);
    const lDate = new Date(year, month, day, 0, 0);
    Vevent.find({
      dtstart: {
        $lte: new Date(gDate),
        $gte: new Date(lDate)
      }
    })
      .select("uid organizer dtstart summary")
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
      .select("uid organizer dtstart summary")
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
