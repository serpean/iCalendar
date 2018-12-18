const msg = require("./msg.js");
const veventController = require("./db/controllers/vevent");

//'publish', 'request', 'reply', 'add', 'cancel', 'refresh', 'counter', 'declinecounter'

const vEventPub = (dtstart, organizer, summary) => {
  return new Promise((resolve, reject) => {
    const uid = Date.now();
    const dtstamp = new Date(uid);
    const cal = new msg.Calendar("tempcal", 1.0);
    console.log(cal);
    cal.setMethod("publish");
    cal.addVevent([dtstamp, dtstart, organizer, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp
    };
    veventController
      .saveVEvent(params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        if (err) reject(err);
      });
  });
};

function vTodoPub(dtstart, organizer, priority, summary) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("publish");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([dtstamp, dtstart, organizer, priority, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vFreebusyPub(dtstart, dtend, organizer) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("publish");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVfree([dtstamp, dtstart, dtend, organizer, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vJournalPub(description, dtstart, organizer) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("publish");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVjournal([description, dtstamp, dtstart, dtend, organizer, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vEventReq(attendee, dtstart, organizer, summary) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("request");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVevent([attendee, dtstamp, dtstart, organizer, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vTodoReq(attendee, dtstart, organizer, priority, summary) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("request");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([attendee, dtstamp, dtstart, organizer, priority, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vFreebusyReq(attendee, dtend, dtstart, organizer) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("request");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVfree([attendee, dtend, dtstamp, dtstart, organizer, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vEventRep(attendee, organizer) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("reply");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVevent([attendee, dtstamp, organizer, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vTodoRep(attendee, organizer) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("reply");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([attendee, dtstamp, organizer, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vFreebusyRep(attendee, dtend, dtstart, organizer) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("reply");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([attendee, dtstamp, dtend, dtstart, organizer, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vEventAdd(dtstart, organizer, sequence, summary) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("add");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVevent([dtstamp, dtstart, organizer, sequence, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vTodoAdd(organizer, priority, sequence, summary) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("add");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([dtstamp, organizer, priority, sequence, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vJournalAdd(description, dtstart, organizer, sequence) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("add");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVjournal([description, dtstamp, dtstart, organizer, sequence, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vEventCancel(organizer, sequence, sequence) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("cancel");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVevent([dtstamp, organizer, sequence, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vTodoCancel(organizer, sequence) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("cancel");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([uid, dtstamp, organizer, sequence]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vJournalCancel(organizer, sequence) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("cancel");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVjournal([dtstamp, organizer, sequence, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vEventRefresh(attendee, organizer) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("refresh");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVevent([attendee, dtstamp, organizer, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vTodoRefresh(attendee) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("refresh");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([attendee, dtstamp, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vEventCounter(dtstart, organizer, sequence, summary) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("counter");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVevent([dtstamp, dtstart, organizer, sequence, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vTodoCounter(attendee, organizer, priority, summary) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("counter");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([attendee, dtstamp, organizer, priority, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vEventDC(attendee, organizer, sequence) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("declinecounter");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVevent([attendee, dtstamp, organizer, sequence, summary, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

function vTodoDC(attendee, organizer, sequence) {
  const cal = new msg.Calendar("tempcal", 1.0);
  cal.setMethod("declinecounter");
  const uid = Date.now();
  const dtstamp = new Date(uid);
  cal.addVtodo([attendee, dtstamp, organizer, sequence, uid]);
  const ev = calendar.toJson().vcalendar.vevent;
  const lastEvent = ev[ev.length - 1];
  return lastEvent;
}

module.exports = {
  vEventAdd,
  vEventCancel,
  vEventCounter,
  vEventDC,
  vEventPub,
  vEventRefresh,
  vEventRep,
  vEventReq,
  vFreebusyPub,
  vFreebusyRep,
  vFreebusyReq,
  vTodoAdd,
  vTodoCancel,
  vTodoCounter,
  vTodoDC,
  vTodoPub,
  vTodoRefresh,
  vTodoRep,
  vTodoReq,
  vJournalAdd,
  vJournalCancel,
  vJournalPub
};
