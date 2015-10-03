global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

var gulp = require('gulp');
var lab = require('gulp-lab');

gulp.task("default"); 
gulp.task('test', function (done) {
   // var stopRethinkDB = startRethinkDB('./test', true); // start rethinkdb for testing
   //   var stopRethinkDB = startRethinkDB('./test', true); // start rethinkdb for testing
    var delay = 2000;
    console.log('Waiting for rethinkDB to initialize for testing');
 
    setTimeout(function () {
        return gulp.src('./test/*.js')
            .pipe(lab('-l -v -m 0'))
            
    }, delay);
});