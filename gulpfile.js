'use strict';


var gulp = require('gulp');

var pug = require('gulp-pug');

var sass = require('gulp-sass');


// [gulp-pug](https://www.npmjs.com/package/gulp-pug)
gulp.task('views', function buildHTML() {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest('docs'));
});


// [gulp-sass](https://www.npmjs.com/package/gulp-sass)
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('docs/css'));
});
