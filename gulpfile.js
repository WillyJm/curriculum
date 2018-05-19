'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');
 
gulp.task('default', ['watch']);

gulp.task('sass', function () {
  console.log("Ejecutando funcion sass");
  return gulp.src('./lib/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/css'));
});
 
gulp.task('compress', function () 
{
 console.log("Ejecutando funcion sass");
  gulp.src('./lib/css/main.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./lib/sass/*.scss', ['sass']);
  gulp.watch('./lib/css/*.css', ['compress']);
});