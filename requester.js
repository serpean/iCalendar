const Jcal = require('./msg');
const Publisher = require('./requester/publish');

function sendData(data){
    let jcal = new Jcal.Calendar('0', 0);
    jcal.parseJSON(data);
    switch(jcal.getMethod()){
        case 'publish':
            Publisher.publish(data);
    }
}