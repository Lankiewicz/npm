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
            function getOSinfo() {
				var type = os.type();
				if(type === 'Darwin') {
					type = 'OSX';
				} else if(type === 'Windows_NT') {
					type = 'Windows';
				}
				var release = os.release();
				var cpu = os.cpus()[0].model;
				var uptime = os.uptime();
				var userInfo = os.userInfo();
				console.log('System:', type);
				console.log('Release:', release);
				console.log('CPU model:', cpu);
				console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
				console.log('User name:', userInfo.username);
				console.log('Home dir:', userInfo.homedir);
			
			}    
        };
    }
});