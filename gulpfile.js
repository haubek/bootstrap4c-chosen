// gulp + gulp plug-ins
var gulp                = require('gulp');
var plumber             = require('gulp-plumber');
var autoprefixer        = require('gulp-autoprefixer');
var sass                = require('gulp-sass');
var rename              = require("gulp-rename");
var cleanCSS            = require('gulp-clean-css');
var stripCssComments    = require('gulp-strip-css-comments');

// build
gulp.task('build', function() {
  gulp.src(['./src/scss/build.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(rename("component-chosen.css"))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(stripCssComments({all: true}))
    .pipe(rename("component-chosen.min.css"))
    .pipe(gulp.dest('./dist/css/'));
});
