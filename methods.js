const msg = require("./msg.js");
const veventController = require("./db/controllers/vevent");

//'publish', 'request', 'reply', 'add', 'cancel', 'refresh', 'counter', 'declinecounter'

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
