const requester = require('./requester');
const Jcal = require('./msg');
const config = require('./config.json');
const topic = 'add';
var channel;
var amqp = require('amqplib').connect(config.CUADM);
amqp.then((ch) => {
    return ch.createChannel();
}).then((ch) => {
    ch.assertQueue(topic);
    channel = ch;
    console.log('Connected to Rabbit');
    var jcal = new Jcal.Calendar('TEST', 0.1);
jcal.setMethod(topic);
//required: ['dtstamp','dtstart','organizer','sequence','summary','uid']
jcal.addVevent([new Date(), new Date(), 'sandbox@blasdeweb.com', 1, 'Henlo mai fremd', Date.now()]);
jcal.setVeventParam(0, 'attendee', 'sandbox@blasdeweb.com,send@nud.es');
jcal.addVevent([new Date(), new Date(), 'sandbox@blasdeweb.com', 2, 'Henlo mai fremd', Date.now()]);
jcal.setVeventParam(1, 'attendee', 'send@nud.es');
console.log('Event created:\n');
console.log(JSON.stringify(jcal.toJson()) + '\n');
console.log('===============================================================================\n');
console.log('Sending to AMQP queue');
requester.sendData(JSON.stringify(jcal.toJson()));
console.log('Calendar sent!');
console.log('===============================================================================\n');
channel.consume(topic, (msg) => {
    console.log('Message received:');
    console.log(msg.content.toString() + '\n');
    console.log('END OF PRINT');
    process.exit(0);
}, {noAck: true});
}).catch(console.warn);

