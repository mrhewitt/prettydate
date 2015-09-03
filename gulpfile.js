var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var filesize = require('gulp-filesize');
var git = require('gulp-git');

gulp.task('compressjs', function() {
  gulp.src('src/prettydate.js')
   .pipe(filesize())
   .pipe(uglify({preserveComments:'license'}))
   .pipe(rename({
		extname: '.min.js'
   }))
   .pipe(gulp.dest('src'))
   .pipe(filesize());
});
/*
gulp.task('add', function(){
  return gulp.src('./src/*.js')
    .pipe(git.add());
});


gulp.task('commit', function(){
  return gulp.src('./src/*.js')
    .pipe(git.commit(['Build update']));
});
*/

gulp.task('default', ['compressjs']);