const Jcal = require('./msg');
const Publisher = require('./requester/publish');

function sendData(data){
    let jcal = new Jcal.Calendar('0', 0);
    let is = jcal.parseJSON(data);
    console.log(is + ' ' + jcal.getParam('prodid'));
    console.log('4');
    console.log(jcal.getMethod());
    switch(jcal.getMethod()){
        case 'add':
            console.log('paso');
            Publisher.adder(data);
            break;
    }
}

module.exports.sendData = sendData;