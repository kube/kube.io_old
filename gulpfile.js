'use strict'

var gulp = require('gulp')
var watchify = require('watchify')
var browserify = require('browserify')
var tsify = require('tsify')
var sass = require('gulp-sass')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var gutil = require('gulp-util')
var sourcemaps = require('gulp-sourcemaps')
var assign = require('lodash.assign')
var browserSync = require('browser-sync')

/**
 * Watchify + Browserify
 */
function bundle(browserifyInstance) {
  return browserifyInstance.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/assets/'))
}

gulp.task('browserify', function() {
  var options = {
    entries: ['./src/app.tsx', './typings/browser.d.ts'],
    plugin: [tsify]
  }

  var browserifyInstance = browserify(options)
  browserifyInstance.on('log', gutil.log)

  return bundle(browserifyInstance)
})

gulp.task('watchify', function() {
  var options = assign({}, watchify.args, {
    debug: true,
    entries: ['./src/app.tsx', './typings/browser.d.ts'],
    plugin: [tsify, watchify]
  })

  var browserifyInstance = browserify(options)
  browserifyInstance.on('update', bundle.bind(null, browserifyInstance))
  browserifyInstance.on('log', gutil.log)

  return bundle(browserifyInstance)
})


/**
 * Html
 */
gulp.task('html', function() {
  gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./dist/'))
})

gulp.task('html:watch', function() {
  gulp.watch(['./src/index.html'], ['html'], browserSync.reload)
})


/**
 * Sass
 */
gulp.task('sass', function() {
  return gulp.src('./src/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch(['./src/**/*.scss'], ['sass'])
})


/**
 * Serve
 */
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  })

  gulp.watch(['*.html', '**/*.js'], { cwd: 'dist' }, browserSync.reload)
})


gulp.task('build', ['browserify', 'sass', 'html'])
gulp.task('watch', ['watchify', 'sass:watch', 'html:watch'])
gulp.task('dev', ['watch', 'serve'])

gulp.task('default', ['dev'])
