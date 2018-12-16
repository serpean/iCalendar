const msg = require("./msg.js");

const cal = new msg.Calendar('serpean1', 1.0);
//'publish', 'request', 'reply', 'add', 'cancel', 'refresh', 'counter', 'declinecounter'

function vEventPub(dtstart, organizer, summary) {
    cal.setMethod('publish');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([dtstamp, dtstart, organizer, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoPub(dtstart, organizer, priority, summary) {
    cal.setMethod('publish');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([dtstamp, dtstart, organizer, priority, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vFreebusyPub(dtstart, dtend, organizer) {
    cal.setMethod('publish');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVfree([dtstamp, dtstart, dtend, organizer, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vJournalPub(description, dtstart, organizer) {
    cal.setMethod('publish');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVjournal([description, dtstamp, dtstart, dtend, organizer, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vEventReq(attendee, dtstart, organizer, summary) {
    cal.setMethod('request');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, dtstart, organizer, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoReq(attendee, dtstart, organizer, priority, summary) {
    cal.setMethod('request');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, dtstart, organizer, priority, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vFreebusyReq(attendee, dtend, dtstart, organizer) {
    cal.setMethod('request');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVfree([attendee, dtend, dtstamp, dtstart, organizer, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vEventRep(attendee, organizer) {
    cal.setMethod('reply');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, organizer, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoRep(attendee, organizer) {
    cal.setMethod('reply');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, organizer, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vFreebusyRep(attendee, dtend, dtstart, organizer) {
    cal.setMethod('reply');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, dtend, dtstart, organizer, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vEventAdd(dtstart, organizer, sequence, summary) {
    cal.setMethod('add');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([dtstamp, dtstart, organizer, sequence, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoAdd(organizer, priority, sequence, summary) {
    cal.setMethod('add');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([dtstamp, organizer, priority, sequence, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vJournalAdd(description, dtstart, organizer, sequence) {
    cal.setMethod('add');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVjournal([description, dtstamp, dtstart, organizer, sequence, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vEventCancel(organizer, sequence, sequence) {
    cal.setMethod('cancel');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([dtstamp, organizer, sequence, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoCancel(organizer, sequence) {
    cal.setMethod('cancel');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([uid, dtstamp, organizer, sequence]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vJournalCancel(organizer, sequence) {
    cal.setMethod('cancel');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVjournal([dtstamp, organizer, sequence, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vEventRefresh(attendee, organizer) {
    cal.setMethod('refresh');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, organizer, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoRefresh(attendee) {
    cal.setMethod('refresh');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vEventCounter(dtstart, organizer, sequence, summary) {
    cal.setMethod('counter');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([dtstamp, dtstart, organizer, sequence, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoCounter(attendee, organizer, priority, summary) {
    cal.setMethod('counter');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, organizer, priority, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vEventDC(attendee, organizer, sequence) {
    cal.setMethod('declinecounter');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVevent([attendee, dtstamp, organizer, sequence, summary, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}

function vTodoDC(attendee, organizer, sequence) {
    cal.setMethod('declinecounter');
    const uid = Date.now();
    const dtstamp = new Date(uid);
    cal.addVtodo([attendee, dtstamp, organizer, sequence, uid]);
    const ev = calendar.toJson().vcalendar.vevent;
    const lastEvent = ev[ev.length - 1];
    return lastEvent;
}