const Jcal = require('./msg');
const Publisher = require('./requester/publish');

function sendData(data){
    let jcal = new Jcal.Calendar('0', 0);
    let is = jcal.parseJSON(data);
    switch(jcal.getMethod()){
        case 'add':
            Publisher.adder(data);
            break;
    }
}

module.exports.sendData = sendData;