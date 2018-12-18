const msg = require("./msg.js");
const veventController = require("./db/controllers/vevent");

//'publish', 'request', 'reply', 'add', 'cancel', 'refresh', 'counter', 'declinecounter'

/**
  * Publishes an event into a calendar
  * @param dtstart Value of the date the event will start 
  * @param organizer Name of the organizer of the event/calendar
  * @param summary Value of the summary which describes the event
  */
const vEventPub = (dtstart, organizer, summary) => {
  return new Promise((resolve, reject) => {
    const uid = Date.now();
    const dtstamp = new Date(uid);
    const cal = new msg.Calendar("tempcal", 1.0);
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

//TODO
function vTodoPub(dtstart, organizer, priority, summary) {
  return new Promise((resolve, reject) => {  
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("publish");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([dtstamp, dtstart, organizer, priority, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      priority: priority,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp
    };
    //TODO Controller
  });
}

//TODO
function vFreebusyPub(dtstart, dtend, organizer) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("publish");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVfree([dtstamp, dtstart, dtend, organizer, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      organizer: organizer,
      dtend: dtend,
      dtstart: dtstart,
      dtstamp: dtstamp
    };
    //TODO Controller
  });
}

//TODO
function vJournalPub(description, dtstart, organizer) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("publish");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVjournal([description, dtstamp, dtstart, dtend, organizer, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      organizer: organizer,
      dtend: dtend,
      dtstart: dtstart,
      dtstamp: dtstamp,
      description: description
    };
    //TODO Controller
  });
}

//TODO
function vEventReq(attendee, dtstart, organizer, summary) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("request");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, dtstart, organizer, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vTodoReq(attendee, dtstart, organizer, priority, summary) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("request");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, dtstart, organizer, priority, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      priority: priority,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vFreebusyReq(attendee, dtend, dtstart, organizer) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("request");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVfree([attendee, dtend, dtstamp, dtstart, organizer, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp,
      dtend: dtend,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vEventRep(attendee, organizer) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("reply");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, organizer, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      organizer: organizer,
      dtstamp: dtstamp,
      dtstamp: attendee
    };
    //TODO Controller
  });
}

//TODO
function vTodoRep(attendee, organizer) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("reply");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, organizer, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      organizer: organizer,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vFreebusyRep(attendee, dtend, dtstart, organizer) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("reply");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, dtend, dtstart, organizer, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      organizer: organizer,
      dtstart: dtstart,
      dtend: dtend,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vEventAdd(dtstart, organizer, sequence, summary) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("add");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([dtstamp, dtstart, organizer, sequence, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      sequence: sequence,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp
    };
    //TODO Controller
  });
}

//TODO
function vTodoAdd(organizer, priority, sequence, summary) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("add");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([dtstamp, organizer, priority, sequence, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      sequence: sequence,
      priority: priority,
      organizer: organizer,
      dtstamp: dtstamp
    };
    //TODO Controller
  });
}

//TODO
function vJournalAdd(description, dtstart, organizer, sequence) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("add");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVjournal([description, dtstamp, dtstart, organizer, sequence, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sequence: sequence,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp,
      description: description
    };
    //TODO Controller
  });
}

//TODO
function vEventCancel(organizer, sequence, sequence) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("cancel");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([dtstamp, organizer, sequence, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sequence: sequence,
      organizer: organizer,
      dtstamp: dtstamp
    };
    //TODO Controller
  });
}

//TODO
function vTodoCancel(organizer, sequence) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("cancel");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([uid, dtstamp, organizer, sequence]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      sequence: sequence,
      organizer: organizer,
      dtstamp: dtstamp,
      uid: uid
    };
    //TODO Controller
  });
}

//TODO
function vJournalCancel(organizer, sequence) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("cancel");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVjournal([dtstamp, organizer, sequence, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sequence: sequence,
      organizer: organizer,
      dtstamp: dtstamp
    };
    //TODO Controller
  });
}

//TODO
function vEventRefresh(attendee, organizer) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("refresh");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, organizer, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      organizer: organizer,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vTodoRefresh(attendee) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("refresh");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vEventCounter(dtstart, organizer, sequence, summary) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("counter");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([dtstamp, dtstart, organizer, sequence, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      sequence: sequence,
      organizer: organizer,
      dtstart: dtstart,
      dtstamp: dtstamp
    };
    //TODO Controller
  });
}

//TODO
function vTodoCounter(attendee, organizer, priority, summary) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("counter");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, organizer, priority, summary, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sumary: summary,
      priority: priority,
      organizer: organizer,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vEventDC(attendee, organizer, sequence) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("declinecounter");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, organizer, sequence, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sequence: sequence,
      organizer: organizer,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
}

//TODO
function vTodoDC(attendee, organizer, sequence) {
  return new Promise((resolve, reject) => {
    const cal = new msg.Calendar("tempcal", 1.0);
    cal.setMethod("declinecounter");
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, organizer, sequence, uid]);
    //const ev = calendar.toJson().vcalendar.vevent;
    //const lastEvent = ev[ev.length - 1];
    const params = {
      uid: uid,
      sequence: sequence,
      organizer: organizer,
      dtstamp: dtstamp,
      attendee: attendee
    };
    //TODO Controller
  });
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
