'use strict';

// node modules
var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// path config
var pathCfg = require('./gulpcfg');
var path = {
    get scss() { return this[this.env].scss; },
    get css() { return this[this.env].css; }
};
// merge path with pathCfg
Object.assign(path, pathCfg);

// scss compile task
gulp.task('scss', function () {
    return gulp.src(path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.css));
});
gulp.task('scss-minify', function () {
    return gulp.src(path.scss)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.css));
});

// watch
gulp.task('watch', function () {
    gulp.watch(path.scss, gulp.series('scss'));
});

// standard task for gulp
gulp.task('default', gulp.series('watch', 'scss'));