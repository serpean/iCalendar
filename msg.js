module.exports.Calendar = class Calendar {
  /**
   * Class Calendar constructor with required parameters
   * @param {string} prod Parameter PRODID from iCalendar
   * @param {number} ver Parameter VERSION from iCalendar
   */
  constructor(prod, ver) {
    this.cal = {
      prodid: prod,
      version: ver
    };
    this.params = [
      "prodid",
      "version",
      "calscale",
      "iana-property",
      "x-property"
    ];
    this.methods = [
      "publish",
      "request",
      "reply",
      "add",
      "cancel",
      "refresh",
      "counter",
      "declinecounter"
    ];
    this.events = {
      publish: {
        vevent: {
          required: ["dtstamp", "dtstart", "organizer", "summary", "uid"],
          optional: [
            "recurrence-id",
            "sequence",
            "attach",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "description",
            "dtend",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "priority",
            "rdate",
            "related-to",
            "resources",
            "rrule",
            "status",
            "transp",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: [
            "dtstamp",
            "dtstart",
            "organizer",
            "priority",
            "summary",
            "uid"
          ],
          optional: [
            "sequence",
            "attach",
            "categories",
            "class",
            "comment",
            "completed",
            "contact",
            "created",
            "description",
            "due",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "percent-complete",
            "rdate",
            "recurrence-id",
            "related-to",
            "resources",
            "rrule",
            "status",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vfreebusy: {
          required: ["dtstamp", "dtstart", "dtend", "organizer", "uid"],
          optional: [
            "freebusy",
            "comment",
            "contact",
            "iana-property",
            "x-property",
            "url",
            "iana-component",
            "x-component"
          ]
        },
        vjournal: {
          required: ["description", "dtstamp", "dtstart", "organizer", "uid"],
          optional: [
            "attach",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "exdate",
            "last-modified",
            "rdate",
            "recurrence-id",
            "related-to",
            "resources",
            "rrule",
            "sequence",
            "status",
            "summary",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        }
      },
      request: {
        vevent: {
          required: [
            "attendee",
            "dtstamp",
            "dtstart",
            "organizer",
            "summary",
            "uid"
          ],
          optional: [
            "sequence",
            "attach",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "description",
            "dtend",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "priority",
            "rdate",
            "related-to",
            "resources",
            "rrule",
            "status",
            "transp",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: [
            "attendee",
            "dtstamp",
            "dtstart",
            "organizer",
            "priority",
            "summary",
            "uid"
          ],
          optional: [
            "sequence",
            "attach",
            "categories",
            "class",
            "comment",
            "completed",
            "contact",
            "created",
            "description",
            "due",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "percent-complete",
            "rdate",
            "recurrence-id",
            "related-to",
            "resources",
            "rrule",
            "status",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vfreebusy: {
          required: [
            "attendee",
            "dtend",
            "dtstamp",
            "dtstart",
            "organizer",
            "uid"
          ],
          optional: [
            "comment",
            "contact",
            "iana-property",
            "x-property",
            "iana-component",
            "x-component"
          ]
        }
      },
      reply: {
        vevent: {
          required: ["attendee", "dtstamp", "organizer", "uid"],
          optional: [
            "recurrence-id",
            "sequence",
            "attach",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "description",
            "dtend",
            "dtstart",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "priority",
            "rdate",
            "related-to",
            "resources",
            "rrule",
            "status",
            "summary",
            "transp",
            "url",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: ["attendee", "dtstamp", "organizer", "uid"],
          optional: [
            "request-status",
            "attach",
            "categories",
            "class",
            "comment",
            "completed",
            "contact",
            "created",
            "description",
            "dtstart",
            "due",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "percent-complete",
            "priority",
            "rdate",
            "related-to",
            "resources",
            "rrule",
            "recurrence-id",
            "sequence",
            "status",
            "summary",
            "url",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vfreebusy: {
          required: [
            "attendee",
            "dtstamp",
            "dtend",
            "dtstart",
            "organizer",
            "uid"
          ],
          optional: [
            "freebusy",
            "comment",
            "contact",
            "iana-property",
            "x-property",
            "iana-component",
            "x-component"
          ]
        }
      },
      add: {
        vevent: {
          required: [
            "dtstamp",
            "dtstart",
            "organizer",
            "sequence",
            "summary",
            "uid"
          ],
          optional: [
            "attach",
            "attendee",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "description",
            "dtend",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "priority",
            "related-to",
            "resources",
            "rrule",
            "status",
            "transp",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: [
            "dtstamp",
            "organizer",
            "priority",
            "sequence",
            "summary",
            "uid"
          ],
          optional: [
            "attach",
            "attendee",
            "categories",
            "class",
            "comment",
            "completed",
            "contact",
            "created",
            "description",
            "dtstart",
            "due",
            "duration",
            "geo",
            "last-modified",
            "location",
            "percent-complete",
            "related-to",
            "resources",
            "status",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vjournal: {
          required: [
            "description",
            "dtstamp",
            "dtstart",
            "organizer",
            "sequence",
            "uid"
          ],
          optional: [
            "attach",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "last-modified",
            "related-to",
            "status",
            "summary",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        }
      },
      cancel: {
        vevent: {
          required: ["dtstamp", "organizer", "sequence", "uid"],
          optional: [
            "attendee",
            "comment",
            "attach",
            "categories",
            "class",
            "contact",
            "created",
            "description",
            "dtend",
            "dtstart",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "priority",
            "rdate",
            "recurrence-id",
            "related-to",
            "resources",
            "rrule",
            "status",
            "summary",
            "transp",
            "url",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: ["uid", "dtstamp", "organizer", "sequence"],
          optional: [
            "attendee",
            "attach",
            "categories",
            "class",
            "comment",
            "completed",
            "contact",
            "created",
            "description",
            "dtstart",
            "due",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "percent-complete",
            "rdate",
            "recurrence-id",
            "related-to",
            "resources",
            "status",
            "url",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vjournal: {
          required: ["dtstamp", "organizer", "sequence", "uid"],
          optional: [
            "attach",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "description",
            "dtstart",
            "exdate",
            "last-modified",
            "rdate",
            "recurrence-id",
            "related-to",
            "rrule",
            "status",
            "summary",
            "url",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        }
      },
      refresh: {
        vevent: {
          required: ["attendee", "dtstamp", "organizer", "uid"],
          optional: [
            "comment",
            "recurrence-id",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: ["attendee", "dtstamp", "uid"],
          optional: [
            "recurrence-id",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        }
      },
      counter: {
        vevent: {
          required: [
            "dtstamp",
            "dtstart",
            "organizer",
            "sequence",
            "summary",
            "uid"
          ],
          optional: [
            "attach",
            "attendee",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "description",
            "dtend",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "priority",
            "rdate",
            "recurrence-id",
            "related-to",
            "resources",
            "request-status",
            "rrule",
            "status",
            "transp",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: [
            "attendee",
            "dtstamp",
            "organizer",
            "priority",
            "summary",
            "uid"
          ],
          optional: [
            "attach",
            "categories",
            "class",
            "comment",
            "completed",
            "contact",
            "created",
            "description",
            "dtstart",
            "due",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "percent-complete",
            "rdate",
            "recurrence-id",
            "related-to",
            "request-status",
            "resources",
            "rrule",
            "sequence",
            "status",
            "url",
            "iana-property",
            "x-property",
            "valarm",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        }
      },
      declinecounter: {
        vevent: {
          required: ["attendee", "dtstamp", "organizer", "sequence", "uid"],
          optional: [
            "attach",
            "categories",
            "class",
            "comment",
            "contact",
            "created",
            "description",
            "dtstart",
            "dtend",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "priority",
            "rdate",
            "recurrence-id",
            "related-to",
            "request-status",
            "resources",
            "rrule",
            "status",
            "summary",
            "transp",
            "url",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        },
        vtodo: {
          required: ["attendee", "dtstamp", "organizer", "sequence", "uid"],
          optional: [
            "attach",
            "categories",
            "class",
            "comment",
            "completed",
            "contact",
            "created",
            "description",
            "dtstart",
            "due",
            "duration",
            "exdate",
            "geo",
            "last-modified",
            "location",
            "percent-complete",
            "priority",
            "rdate",
            "recurrence-id",
            "related-to",
            "request-status",
            "resources",
            "rrule",
            "status",
            "url",
            "iana-property",
            "x-property",
            "vtimezone",
            "iana-component",
            "x-component"
          ]
        }
      }
    };
  }

  /**
   * Adds a parameter into the VCALENDAR area
   * @param {string} name Name of the parameter which is going to be added in lowercase
   * @param {string} value Value of the previous parameter
   * @return {boolean} Returns true if it was correctly done or false if parameter name was not recognized
   */
  addParam(name, value) {
    if (this.params.indexOf(name) == -1) return false;
    this.cal[name] = value;
    return true;
  }

  /**
   * Returns the value of a VCALENDAR parameter
   * @param {string} name The name of the parameter
   * @return {string} The value of the parameter or false if has not been found
   */
  getParam(name) {
    if (this.cal[name] == undefined) return false;
    return this.cal[name];
  }

  /**
   * Sets the parameter METHOD into the calendar and adds it if had not been created
   * @param {string} method
   * @return {boolean} True if it was a success or false if method name was not recognized
   */
  setMethod(method) {
    if (this.methods.indexOf(method) == -1) return false;
    this.cal.method = method;
    return true;
  }

  /**
   * Returns the method setted into VCALENDAR
   * @return {string} Method name or null if METHOD was unset
   */
  getMethod() {
    if (this.cal.method == undefined) return null;
    return this.cal.method;
  }

  /**
   * Create a VEVENT with the required parameters
   * @param {Array} args Required parameters for the given method as an Array, see listVeventParam() for more details
   * @return {number|boolean} Identification of the VEVENT node just created or false if method unset or required parameters not filled properly
   */
  addVevent(args) {
    const method = this.getMethod();
    if (!method) return false;
    const req = this.events[method].vevent.required;
    if (req.length != args.length) return false;
    let res = {};
    for (let i = 0; i < args.length; i++) res[req[i]] = args[i];
    if (this.cal.vevent == undefined) this.cal.vevent = [];
    const id = this.cal.vevent.push(res);
    return id - 1;
  }

  /**
   * Modify an existing VEVENT referenced with the ID parameter
   * @param {number} id Identificator of the VEVENT
   * @param {string} name Name of the parameter
   * @param {string} value Value of the parameter below
   * @return {boolean} True if all went fine or false if there is no VEVENT or wrong parameter name
   */
  setVeventParam(id, name, value) {
    const method = this.getMethod();
    if (this.events[method].vevent.optional.indexOf(name) == -1)
      if (this.events[method].vevent.required.indexOf(name) == -1) return false;
    if (this.cal.vevent == undefined || this.cal.vevent.length <= id)
      return false;
    this.cal.vevent[id][name] = value;
    return true;
  }

  /**
   * Get the current parameter value for the given name of the ID VEVENT
   * @param {number} id Identificator of the VEVENT
   * @param {string} name Name of the parameter
   * @return {string|boolean} Value of the VEVENT parameter or false if incorrect parameter name or undefined VEVENT
   */
  getVeventParam(id, name) {
    if (this.cal.vevent == undefined || this.cal.vevent.length <= id)
      return false;
    if (this.cal.vevent[id][name] == undefined) return false;
    return this.cal.vevent[id][name];
  }

  /**
   * List of VCALENDAR parameters
   * @return {Array} Array containing all parameters
   */
  listParam() {
    return this.params;
  }

  /**
   * List of methods allowed at VCALENDAR
   * @return {Array} Array containing all methods allowed
   */
  listMethods() {
    return this.methods;
  }

  /**
   * List of VEVENT parameters for the setted method
   * @return {JSON|string} JSON containing VEVENT parameters or a human-readable method
   */
  listVeventParam() {
    const method = this.cal.method;
    if (!method) return "Select method first!";
    return this.events[method].vevent;
  }

  /**
   * Get the current calendar
   * @return {JSON} JSON containing the current VCALENDAR
   */
  toJson() {
    const res = {
      vcalendar: this.cal
    };
    return res;
  }

  /**
   * Create a new VTODO with the required parameters
   * @param {Array} args Array with the required parameters, see listVtodoParam() for more details
   * @return {number|boolean} Identifier of the just created VTODO node or false if the array is not properly filled or there is no method set
   */
  addVtodo(args) {
    const method = this.getMethod();
    if (!method) return false;
    const req = this.events[method].vtodo.required;
    if (req.length != args.length) return false;
    let res = {};
    for (let i = 0; i < args.length; i++) res[req[i]] = args[i];
    if (this.cal.vtodo == undefined) this.cal.vtodo = [];
    const id = this.cal.vtodo.push(res);
    return id - 1;
  }

  /**
   * Set a parameter for the given ID VTODO
   * @param {number} id Identification of the VTODO node
   * @param {string} name Name of the parameter
   * @param {string} value Value of the parameter below
   * @return {boolean} False if there is no paramter with that name or there is no VTODO defined
   */
  setVtodoParam(id, name, value) {
    const method = this.getMethod();
    if (this.events[method].vtodo.optional.indexOf(name) == -1)
      if (this.events[method].vtodo.required.indexOf(name) == -1) return false;
    if (this.cal.vtodo == undefined || this.cal.vtodo.length <= id)
      return false;
    this.cal.vtodo[id][name] = value;
    return true;
  }

  /**
   * Get a parameter for the selected VTODO
   * @param {number} id Identification of the VTODO node
   * @param {string} name Name of the parameter
   * @return {string|boolean} The value of the parameter or false if there is no valid VTODO/parameter name
   */
  getVtodoParam(id, name) {
    if (this.cal.vtodo == undefined || this.cal.vtodo.length <= id)
      return false;
    if (this.cal.vtodo[id][name] == undefined) return false;
    return this.cal.vtodo[id][name];
  }

  /**
   * List all allowed VTODO parameters for the method set
   * @return {JSON|string} JSON cointaining all methods allowed or a human readable error
   */
  listVtodoParam() {
    const method = this.cal.method;
    if (!method) return "Select method first!";
    return this.events[method].vtodo;
  }

  /**
   * Adds a VFREE event with the required parameters and a method set
   * @param {Array} args Array containing the required parameters
   * @return {number|boolean} Identifier of the VFREE node just created or false if there is no method
   */
  addVfree(args) {
    const method = this.getMethod();
    if (!method) return false;
    const req = this.events[method].vfreebusy.required;
    if (req.length != args.length) return false;
    let res = {};
    for (let i = 0; i < args.length; i++) res[req[i]] = args[i];
    if (this.cal.vfreebusy == undefined) this.cal.vfreebusy = [];
    const id = this.cal.vfreebusy.push(res);
    return id - 1;
  }

  /**
   * Set to a VFREE event the given paramenter
   * @param {number} id Identification of the VFREE node
   * @param {string} name Name of the parameter
   * @param {string} value Value for the parameter name below
   * @return {boolean} False if there is no VFREE/parameter name allowed or true if all went fine
   */
  setVfreeParam(id, name, value) {
    const method = this.getMethod();
    if (this.events[method].vfreebusy.optional.indexOf(name) == -1)
      if (this.events[method].vfreebusy.required.indexOf(name) == -1)
        return false;
    if (this.cal.vfreebusy == undefined || this.cal.vfreebusy.length <= id)
      return false;
    this.cal.vfreebusy[id][name] = value;
    return true;
  }

  /**
   * Get a VFREE parameter value for the given name
   * @param {number} id Identification of the VFREE node
   * @param {string} name Name of the requested parameter
   * @return {string|boolean} Value of the parameter or false if there is no parameter or VFREE node
   */
  getVfreeParam(id, name) {
    if (this.cal.vfreebusy == undefined || this.cal.vfreebusy.length <= id)
      return false;
    if (this.cal.vfreebusy[id][name] == undefined) return false;
    return this.cal.vfreebusy[id][name];
  }

  /**
   * List VFREE parameter for the set method
   * @return {JSON|string} JSON containing all methods avaliables or a human readable error
   */
  listVfreeParam() {
    const method = this.cal.method;
    if (!method) return "Select method first!";
    return this.events[method].vfreebusy;
  }

  /**
   * Add a VJOURNAL node with the required parameters
   * @param {Array} args Array containing required parameters, see listVjournalParam() for more details
   * @return {number|boolean} Identification of the just created VJOURNAL or false if parameters array is not properly filled
   */
  addVjournal(args) {
    const method = this.getMethod();
    if (!method) return false;
    const req = this.events[method].vjournal.required;
    if (req.length != args.length) return false;
    let res = {};
    for (let i = 0; i < args.length; i++) res[req[i]] = args[i];
    if (this.cal.vjournal == undefined) this.cal.vjournal = [];
    const id = this.cal.vjournal.push(res);
    return id - 1;
  }

  /**
   * Set a parameter into selected VJOURNAL with the given name and value pair
   * @param {number} id Identification of the VJOURNAL node
   * @param {string} name Name of the parameter
   * @param {string} value Value of the parameter below
   * @return {boolean} False if there is no VJOURNAL defined/parameter name not allowed or true if all went fine
   */
  setVjournalParam(id, name, value) {
    const method = this.getMethod();
    if (this.events[method].vjournal.optional.indexOf(name) == -1)
      if (this.events[method].vjournal.required.indexOf(name) == -1)
        return false;
    if (this.cal.vjournal == undefined || this.cal.vjournal.length <= id)
      return false;
    this.cal.vjournal[id][name] = value;
    return true;
  }

  /**
   * Get the parameter value for the selected VJOURNAL
   * @param {number} id Identification of the VJOURNAL
   * @param {string} name Name of the parameter
   * @return {string|boolean} Value of the parameter or false if there is no parameter
   */
  getVjournalParam(id, name) {
    if (this.cal.vjournal == undefined || this.cal.vjournal.length <= id)
      return false;
    if (this.cal.vjournal[id][name] == undefined) return false;
    return this.cal.vjournal[id][name];
  }

  /**
   * List all allowed VJOURNAL parameter names for the set method
   * @return {JSON|string} JSON containing parameter names or a human readable error
   */
  listVjournalParam() {
    const method = this.cal.method;
    if (!method) return "Select method first!";
    return this.events[method].vjournal;
  }

  /**
   * Parse a stringfied JSON to a JCALENDAR object
   * @param {string} jotason Stringfied JSON with an JCALENDAR valid format
   * @return {boolean} False if it is not a valid JSON or true if all went fine
   */
  parseJSON(jotason) {
    const json = JSON.parse(jotason);
    if (json.vcalendar == undefined) return false;
    this.cal = json.vcalendar;
    return true;
  }
};
