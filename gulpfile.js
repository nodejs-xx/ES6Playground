var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("default", callback => {
  return gulp.watch("./src/*.js", event => {
    var file = event.path;
    var regexp = /[^\/]*$/;
    console.log("run \"" + regexp.exec(file)[0]+"\": ");
    gulp.src(file)
    .pipe(shell(["node "+file],{ignoreErrors: true}));
  });
});
