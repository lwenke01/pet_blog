'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const sources = {
  html: __dirname + '/public/**/*.html',
  js: __dirname + '/public/js/**/*.js',
  test: __dirname + '/test/*_spec.js',
  images: __dirname + '/public/images/*',
  libs: __dirname + '/public/libs/**/*'
  // imgs: __dirname + '/app/**/*.jpg'


};
gulp.task('default', function() {
  return gulp.src('./public/js/app.js')
    .pipe(webpack())
    .pipe(gulp.dest('build/'));
});

gulp.task('build:css', function() {
  gulp.src('public/styles/new.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/'));
});

gulp.task('bundle:dev', () => {
  return gulp.src(sources.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy:html', () => {
  return gulp.src(sources.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy:libs', () => {
  return gulp.src(sources.libs)
    .pipe(gulp.dest('./build/libs'));
});

gulp.task('copy:image', () => {
  return gulp.src(sources.images)
    .pipe(gulp.dest('./build/images'));
});
// gulp.task('copy:imgs', () => {
//   return gulp.src(sources.imgs)
//     .pipe(gulp.dest('./build'));
// });



gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpack({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});



gulp.task('default', ['bundle:dev', 'copy:image', 'copy:html','build:css','copy:libs','bundle:test']);
