
'use strict';

var gulp = require('gulp'), 
sass = require('gulp-sass') ;


var
source = 'public/',
dest = 'build/';

var bootstrapSass = {
  in: './bower_components/bootstrap-sass-official/'
};

var fonts = {
  in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
  out: dest + 'fonts/'
};

var css = {
  in: source + 'css/main.scss',
  out: dest + 'css/',
  watch: source + 'css/**/*',
  sassOpts: {
    outputStyle: 'nested',
    precison: 3,
    errLogToConsole: true,
    includePaths: [bootstrapSass.in + 'assets/stylesheets']
  }
};


gulp.task('fonts', function () {
  return gulp
  .src(fonts.in)
  .pipe(gulp.dest(fonts.out));
});

// compile scss
gulp.task('sass', ['fonts'], function () {
  return gulp.src(css.in)
  .pipe(sass(css.sassOpts))
  .pipe(gulp.dest(css.out));
});

// default task
gulp.task('default', ['sass'], function () {
  gulp.watch(css.watch, ['sass']);
});
