var os = require('os');
var EventEmitter = require("events").EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
		var time
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/150s.':
                process.(150s / 60).toFixed(0), 'min');
                break;
			case '/getOSinfo':
				getOSinfo();
				break;
            default:
});
	    OSinfo.print();
