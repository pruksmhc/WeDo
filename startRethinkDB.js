

var spawn = require('child_process').spawn;
var Config = require('config.js');

// returns function to kill the spawned rethinkdb
module.exports = function startRethinkDb(cwd, testing) {
    var options = {};
    var rethinkdb = null;
    var config = null;

    if (cwd) {
        options.cwd = cwd;
    }
    if (testing === true) {
        config = Config('test');
        rethinkdb = spawn('rethinkdb', ['--cluster-port', config.rethinkdb.clusterPort, '--driver-port', config.rethinkdb.driverPort], options);
    }
    else {
        rethinkdb = spawn('rethinkdb', options);
    }
    rethinkdb.stdout.setEncoding('utf8');
    rethinkdb.stdout.on('data', function (txt) {
        process.stdout.write('rethinkdb: ' + txt);
    });
    rethinkdb.stderr.setEncoding('utf8');
    rethinkdb.stderr.on('data', function (txt) {
        process.stderr.write('rethinkdb error: ' + txt);
    });
    return function killRethinkDb() {
        console.log('stopping rethinkdb');
        rethinkdb.kill('SIGKILL');
    };
};