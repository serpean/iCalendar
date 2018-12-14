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
        this.params = ['prodid', 'version', 'calscale', 'iana-property', 'x-property'];
        this.methods = ['publish', 'request', 'reply', 'add', 'cancel', 'refresh', 'counter', 'declinecounter'];
        //this.events = ['vevent','vtodo','vjournal','vfreebusy'];
        this.events = {
            publish: {
                vevent: {
                    required: ['dtstamp','dtstart','organizar','summary','uid']
                    optional: ['recurrence-id','sequence','attach','categories','class','comment','contact','created','description','dtend','duration','exdate','geo','last-modified','location','priority','rdate','related-to','resources','rrule','status','transp','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
                vtodo: {
                    required: ['dtstamp','dtstart','organizar','priority','summary','uid']
                    optional: ['sequence','attach','categories','class','comment','completed','contact','created','description','due','duration','exdate','geo','last-modified','location','percent-complete','rdate','recurrence-id','related-to','resources','rrule','status','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
                vfreebusy: {
                    required: ['dtstamp','dtstart','dtend','organizer','uid']
                    optional: ['freebusy','comment','contact','iana-property','x-property','url','iana-component','x-component']
                };
                vjournal: {
                    required: ['description','dtstamp','dtstart','organizar','uid']
                    optional: ['attach','categories','class','comment','contact','created','exdate','last-modified','rdate','recurrence-id','related-to','resources','rrule','sequence','status','summary','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
            };
            request: {
                vevent: {
                    required: ['attendee','dtstamp','dtstart','organizar','summary','uid']
                    optional: ['sequence','attach','categories','class','comment','contact','created','description','dtend','duration','exdate','geo','last-modified','location','priority','rdate','related-to','resources','rrule','status','transp','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
                vtodo: {
                    required: ['attendee','dtstamp','dtstart','organizar','priority','summary','uid']
                    optional: ['sequence','attach','categories','class','comment','completed','contact','created','description','due','duration','exdate','geo','last-modified','location','percent-complete','rdate','recurrence-id','related-to','resources','rrule','status','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
                vfreebusy: {
                    required: ['attendee','dtend','dtstamp','dtstart','organizer','uid']
                    optional: ['comment','contact','iana-property','x-property','iana-component','x-component']
                };
            };
            reply: {
                vevent: {
                    required: ['attendee','dtstamp','organizar','uid']
                    optional: ['recurrence-id','sequence','attach','categories','class','comment','contact','created','description','dtend','dtstart','duration','exdate','geo','last-modified','location','priority','rdate','related-to','resources','rrule','status','summary','transp','url','iana-property','x-property','vtimezone','iana-component','x-component']
                };
                vtodo: {
                    required: ['attendee','dtstamp','organizar','uid']
                    optional: ['request-status','attach','categories','class','comment','completed','contact','created','description','dtstart','due','duration','exdate','geo','last-modified','location','percent-complete','priority','rdate','related-to','resources','rrule','recurrence-id','sequence','status','summary','url','iana-property','x-property','vtimezone','iana-component','x-component']
                };
                vfreebusy: {
                    required: ['attendee','dtstamp','dtend','dtstart','organizer','uid']
                    optional: ['freebusy','comment','contact','iana-property','x-property','iana-component','x-component']
                };
            };
            add: {
                vevent: {
                    required: ['dtstamp','dtstart','organizar','sequence','summary','uid']
                    optional: ['attach','attendee','categories','class','comment','contact','created','description','dtend','duration','exdate','geo','last-modified','location','priority','related-to','resources','rrule','status','transp','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
                vtodo: {
                    required: ['dtstamp','organizar','priority','sequence','summary','uid']
                    optional: ['attach','attendee','categories','class','comment','completed','contact','created','description','dtstart','due','duration','geo','last-modified','location','percent-complete','related-to','resources','status','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
                vjournal: {
                    required: ['description','dtstamp','dtstart','organizar','sequence','uid']
                    optional: ['attach','categories','class','comment','contact','created','last-modified','related-to','status','summary','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
            };
            cancel: {
                vevent: {
                    required: ['dtstamp','organizar','sequence','uid']
                    optional: ['attendee','comment','attach','categories','class','contact','created','description','dtend','dtstart','duration','exdate','geo','last-modified','location','priority','rdate','recurrence-id','related-to','resources','rrule','status','summary','transp','url','iana-property','x-property','vtimezone','iana-component','x-component']
                };
                vtodo: {
                    required: ['uid','dtstamp','organizar','sequence']
                    optional: ['attendee','attach','categories','class','comment','completed','contact','created','description','dtstart','due','duration','exdate','geo','last-modified','location','percent-complete','rdate','recurrence-id','related-to','resources','status','url','iana-property','x-property','vtimezone','iana-component','x-component']
                };
                vjournal: {
                    required: ['dtstamp','organizar','sequence','uid']
                    optional: ['attach','categories','class','comment','contact','created','description','dtstart','exdate','last-modified','rdate','recurrence-id','related-to','rrule','status','summary','url','iana-property','x-property','vtimezone','iana-component','x-component']
                };
            };
            refresh: {
                vevent: {
                    required: ['attendee','dtstamp','organizar','uid']
                    optional: ['comment','recurrence-id','iana-property','x-property','vtimezone','iana-component','x-component']
                };
                vtodo: {
                    required: ['attendee','dtstamp','uid']
                    optional: ['recurrence-id','iana-property','x-property','vtimezone','iana-component','x-component']
                };
            };
            counter: {
                vevent: {
                    required: ['dtstamp','dtstart','organizar','sequence','summary','uid']
                    optional: ['attach','attendee','categories','class','comment','contact','created','description','dtend','duration','exdate','geo','last-modified','location','priority','rdate','recurrence-id','related-to','resources','request-status','rrule','status','transp','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
                vtodo: {
                    required: ['attendee','dtstamp','organizar','priority','summary','uid']
                    optional: ['attach','categories','class','comment','completed','contact','created','description','dtstart','due','duration','exdate','geo','last-modified','location','percent-complete','rdate','recurrence-id','related-to','request-status','resources','rrule','sequence','status','url','iana-property','x-property','valarm','vtimezone','iana-component','x-component']
                };
            };
            declinecounter: {
                vevent: {
                    required: ['attendee','dtstamp','organizar','sequence','uid']
                    optional: ['attach','categories','class','comment','contact','created','description','dtstart','dtend','duration','exdate','geo','last-modified','location','priority','rdate','recurrence-id','related-to','request-status','resources','rrule','status','summary','transp','url','iana-property','x-property','vtimezone','iana-component','x-component']
                };
                 vtodo: {
                    required: ['attendee','dtstamp','organizar','sequence','uid']
                    optional: ['attach','categories','class','comment','completed','contact','created','description','dtstart','due','duration','exdate','geo','last-modified','location','percent-complete','priority','rdate','recurrence-id','related-to','request-status','resources','rrule','status','url','iana-property','x-property','vtimezone','iana-component','x-component']
                };
            };
        }
    }

    /**
     * Adds a parameter into the VCALENDAR area
     * @param {string} name Name of the parameter which is going to be added in lowercase 
     * @param {string} value Value of the previous parameter
     * @return {boolean} Returns true if it was correctly done or false if parameter name was not recognized
     */
    addParam(name, value) {
        if(this.params.indexOf(name) == -1)
            return false;
        this.cal[name] = value;
        return true;
    }

    /**
     * Returns the value of a VCALENDAR parameter
     * @param {string} name The name of the parameter
     * @return {string} The value of the parameter or false if has not been found
     */
    getParam(name) {
        if(this.cal[name] == undefined) return false;
        return this.cal[name];
    }

    /**
     * Sets the parameter METHOD into the calendar and adds it if had not been created
     * @param {string} method 
     * @return {boolean} True if it was a success or false if method name was not recognized
     */
    setMethod(method) {
        if(this.methods.indexOf(method) == -1) return false;
        this.cal.method = method;
        return true;
    }

    /**
     * Returns the method setted into VCALENDAR
     * @return {string} Method name or null if METHOD was unset
     */
    getMethod() {
        if(this.cal.method == undefined) return null;
        return this.cal.method;
    }

    /**
     * Create a VEVENT with the required parameters
     * @param {Array} args Required parameters for the given method as an Array, see listVeventParam() for more details
     * @return {boolean} True if all went fine or false if method unset or required parameters not filled properly
     */
    addVevent(args){
        let method = this.getMethod();
        if(!method) return false;
        let req = this.events[method].vevent.required;
        if(req.length != args.length) return false;
        let res = {};
        for(let i = 0; i < args.length; i++) res[req[i]] = args[i];
        if(this.cal.vevent == undefined) this.cal.vevent = [];
        this.cal.vevent.push(res);
        return true;  
    }

    /**
     * Modify an existing VEVENT referenced with the ID parameter
     * @param {number} id Identificator of the VEVENT
     * @param {string} name Name of the parameter
     * @param {string} value Value of the parameter below
     * @return {boolean} True if all went fine or false if there is no VEVENT or wrong parameter name
     */
    setVeventParam(id, name, value){
        if(this.events[method].vevent.optional.indexOf(name) == -1) 
            if(this.events[method].vevent.required.indexOf(name) == -1)
                return false;
        if(this.cal.vevent == undefined || this.cal.vevent.length <= id) return false;
        this.cal.vevent[id][name] = value;
        return true;
    }

    /**
     * Get the current parameter value for the given name of the ID VEVENT
     * @param {number} id Identificator of the VEVENT
     * @param {string} name Name of the parameter
     * @return {string|boolean} Value of the VEVENT parameter or false if incorrect parameter name or undefined VEVENT
     */
    getVeventParam(id,name){
        if(this.cal.vevent == undefined || this.cal.vevent.length <= id) return false;
        if(this.cal.vevent[id][name] == undefined) return false;
        return this.cal.vevent[id][name];
    }

    /**
     * List of VCALENDAR parameters
     * @return {Array} Array containing all parameters
     */
    listParam(){
        return this.params;
    }

    /**
     * List of methods allowed at VCALENDAR
     * @return {Array} Array containing all methods allowed
     */
    listMethods(){
        return this.methods;
    }

    /**
     * List of VEVENT parameters for the setted method
     * @return {JSON|string} JSON containing VEVENT parameters or a human-readable method
     */
    listVeventParam(){
        let method = this.cal.method;
        if(!method) return 'Select method first!';
        return this.events[method].vevent;
    }

    /**
     * Get the current calendar
     * @return {JSON} JSON containing the current VCALENDAR
     */
    toJson(){
        let res = {
            vcalendar: this.cal
        };
        return res;
    }

    /**
     * Create a new VTODO with the required parameters
     * @param {Array} args Array with the required parameters, see listVtodoParam() for more details
     * @return {boolean} True if all went fine or false if the array is not properly filled or there is no method set
     */
    addVtodo(args){
        let method = this.getMethod();
        if(!method) return false;
        let req = this.events[method].vtodo.required;
        if(req.length != args.length) return false;
        let res = {};
        for(let i = 0; i < args.length; i++) res[req[i]] = args[i];
        if(this.cal.vtodo == undefined) this.cal.vtodo = [];
        this.cal.vtodo.push(res);
        return true;  
    }

    /**
     * Set a parameter for the given ID VTODO
     * @param {number} id Identification of the VTODO node
     * @param {string} name Name of the parameter
     * @param {string} value Value of the parameter below
     * @return {boolean} False if there is no paramter with that name or there is no VTODO defined
     */
    setVtodoParam(id, name, value){
        if(this.events[method].vtodo.optional.indexOf(name) == -1) 
            if(this.events[method].vtodo.required.indexOf(name) == -1)
                return false;
        if(this.cal.vtodo == undefined || this.cal.vtodo.length <= id) return false;
        this.cal.vtodo[id][name] = value;
        return true;
    }

    /**
     * Get a parameter for the selected VTODO
     * @param {number} id Identification of the VTODO node
     * @param {string} name Name of the parameter
     * @return {string|boolean} The value of the parameter or false if there is no valid VTODO/parameter name
     */
    getVtodoParam(id,name){
        if(this.cal.vtodo == undefined || this.cal.vtodo.length <= id) return false;
        if(this.cal.vtodo[id][name] == undefined) return false;
        return this.cal.vtodo[id][name];
    }

    /**
     * List all allowed VTODO parameters for the method set
     * @return {JSON|string} JSON cointaining all methods allowed or a human readable error
     */
    listVtodoParam(){
        let method = this.cal.method;
        if(!method) return 'Select method first!';
        return this.events[method].vtodo;
    }

    /**
     * Adds a VFREE event with the required parameters and a method set
     * @param {Array} args Array containing the required parameters
     * @return {boolean} False if there is no method or true if all went fine
     */
    addVfree(args){
        let method = this.getMethod();
        if(!method) return false;
        let req = this.events[method].vfreebusy.required;
        if(req.length != args.length) return false;
        let res = {};
        for(let i = 0; i < args.length; i++) res[req[i]] = args[i];
        if(this.cal.vfreebusy == undefined) this.cal.vfreebusy = [];
        this.cal.vfreebusy.push(res);
        return true;  
    }

    /**
     * 
     * @param {number} id 
     * @param {string} name 
     * @param {string} value 
     */
    setVfreeParam(id, name, value){
        if(this.events[method].vfreebusy.optional.indexOf(name) == -1) 
            if(this.events[method].vfreebusy.required.indexOf(name) == -1)
                return false;
        if(this.cal.vfreebusy == undefined || this.cal.vfreebusy.length <= id) return false;
        this.cal.vfreebusy[id][name] = value;
        return true;
    }

    getVfreeParam(id,name){
        if(this.cal.vfreebusy == undefined || this.cal.vfreebusy.length <= id) return false;
        if(this.cal.vfreebusy[id][name] == undefined) return false;
        return this.cal.vfreebusy[id][name];
    }

    listVfreeParam(){
        let method = this.cal.method;
        if(!method) return 'Select method first!';
        return this.events[method].vfreebusy;
    }

    //VJOURNAL

    addVjournal(args){
        let method = this.getMethod();
        if(!method) return false;
        let req = this.events[method].vjournal.required;
        if(req.length != args.length) return false;
        let res = {};
        for(let i = 0; i < args.length; i++) res[req[i]] = args[i];
        if(this.cal.vjournal == undefined) this.cal.vjournal = [];
        this.cal.vjournal.push(res);
        return true;  
    }
    setVjournalParam(id, name, value){
        if(this.events[method].vjournal.optional.indexOf(name) == -1) 
            if(this.events[method].vjournal.required.indexOf(name) == -1)
                return false;
        if(this.cal.vjournal == undefined || this.cal.vjournal.length <= id) return false;
        this.cal.vjournal[id][name] = value;
        return true;
    }

    getVjournalParam(id,name){
        if(this.cal.vjournal == undefined || this.cal.vjournal.length <= id) return false;
        if(this.cal.vjournal[id][name] == undefined) return false;
        return this.cal.vjournal[id][name];
    }

    listVjournalParam(){
        let method = this.cal.method;
        if(!method) return 'Select method first!';
        return this.events[method].vjournal;
    }
}