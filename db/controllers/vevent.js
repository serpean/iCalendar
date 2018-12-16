const Vevent = require("../models/vevent");

const saveVEvent = params => {
  return new Promise((resolve, reject) => {
    let TempVevent = new Vevent();
    TempVevent.uid = params.uid;
    TempVevent.summary = params.summary;
    TempVevent.organizer = params.organizer;
    TempVevent.dtstart = params.dtstart;
    TempVevent.dtstamp = params.dtstamp;

    TempVevent.save(err => {
      if (err) reject("No se pudo guardar el evento");
      resolve(uid);
    });
  });
};

const findVEvent = uid => {
  return new Promise((resolve, reject) => {
    Vevent.find({ uid: uid }).exec((err, event) => {
      if (err) reject(err);
      resolve(event);
    });
  });
};

const deleteVEvent = uid => {
  return Promise((resolve, reject) => {
    Vevent.findOneAndDelete({ uid: uid }).exec((err, event) => {
      if (err) reject(err);
      resolve(event);
    });
  });
};
