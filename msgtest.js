var api = require('./msg');

var c1 = new api.Calendar('ibngwbefiwbf', 1.0);
let test1 = {};
test1.t1 = c1.addParam('calscale', 'hello'); //true
test1.t2 = c1.getParam('calscale'); //hello
test1.t3 = c1.setMethod('publish'); //true
test1.t4 = c1.getMethod(); //publish
test1.t5 = c1.addParam('send', 'nudes'); //false
test1.t6 = c1.getParam('send'); //false
test1.t7 = c1.setMethod('nudes'); //false
test1.t8 = c1.addParam('CalsCale', 'nuke'); //false
test1.t9 = c1.setMethod('puBlish'); //false

console.log('Results test 1:');
console.log(test1);