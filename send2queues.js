
const request = require('request');

function send2queue(dtstart, organizer, summary, optional) {

    const uid = Date.now();
    const dtstamp = new Date(uid);
    request.post(
        'http://localhost:3010/event2queue/',
        {
             "uid"      :uid.toString()
            ,"dtstart"  :dtstart
            ,"organizer":organizer
            ,"summary"  :summary
            ,"dtstamp"  :dtstamp.toString()
            ,"optional" :optional
        },
        function (error, response, body) {
            if (!error && response.statusCode === 202) {
                console.log('-- Mensaje reenviado correctamente')
            }
        }
    );
}

module.exports = {
    send2queue
};