global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

var gulp = require('gulp');
var lab = require('gulp-lab');
var startRethinkDB = require('./test/startRethink'); 
var es = require('event-stream');
var del = require('del');
var shell = require('gulp-shell');

gulp.task("default"); 
gulp.task('test', function (done) {
   // var stopRethinkDB = startRethinkDB('./test', true); // start rethinkdb for testing
   //   var stopRethinkDB = startRethinkDB('./test', true); // start rethinkdb for testing
   var stopRethinkDB = startRethinkDB('./test', true); // start rethinkdb for testing
    var delay = 2000;
    console.log('Waiting for rethinkDB to initialize for testing');
   del.sync('./test/rethinkdb_data/');
    setTimeout(function () {
        return gulp.src('./test/*.js')
            .pipe(lab('-l -v -m 0'))
            .pipe(es.wait(function () {
                stopRethinkDB();
                setTimeout(function () {
                    del('./test/rethinkdb_data/', done);
                }, delay);
            }));
    }, delay);
}); 
 

 gulp.task('db', shell.task([
  'rethinkdb --directory db/rethinkdb_data'
]));