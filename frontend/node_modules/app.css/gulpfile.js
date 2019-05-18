var gulp = require('gulp'),
  kss = require('gulp-kss'),
  sass = require('gulp-ruby-sass'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  rename = require('gulp-rename'),
  coffee = require('gulp-coffee'),
  shell = require('gulp-shell'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  options = require('./env'),
  jade = require('gulp-jade'),
  insert = require('gulp-insert'),
  fileInsert = require('gulp-file-insert'),
  sourcemaps = require('gulp-sourcemaps');

// Main entry point
gulp.task('default', ['build', 'watch', 'connect']);

// Basic builder
gulp.task('build', ['compile:jade', 'compile:coffee', 'compile:sass', 'copy', 'kss']);

// KSS
gulp.task('kss', function() {
  gulp.src(['lib/sass/**/*.sass'])
    .pipe(kss({
      overview: './lib/styleguide/index.md'
    }))
    .pipe(gulp.dest('./public/styleguide/'));

});

// Static assets
gulp.task('copy', function() {
  gulp.src(['./lib/img/**/*'])
    .pipe(shell([
      'mkdir -p ./public/img'
    ]))
    .pipe(gulp.dest('./public/img'));
  
  gulp.src(['./lib/**/*.ico'])
    .pipe(gulp.dest('./public'));

  gulp.src(['./lib/sitemap.xml'])
    .pipe(gulp.dest('./public'));
})

// Compilers
gulp.task('compile:sass', function() {
  gulp.src(['./lib/sass/main.sass'])
    .pipe(sass({
      sourcemap: false
    }))
    .pipe(fileInsert({
      "/* normalize.css will be added here */": "./node_modules/normalize.css/normalize.css"
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./public/css'));

  gulp.src(['./lib/sass/docs.sass'])
    .pipe(sass({
      sourcemap: false
    }))
    .pipe(gulp.dest('./public/css'));

});

gulp.task('compile:coffee', function() {

  if (options.env != "dev") {
    gulp.src(['./lib/coffee/**/*.coffee'])
      .pipe(insert.prepend("env = '" + options.env + "'\n"))
      .pipe(coffee({
        bare: false
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js'));

    // Special case for the node index.js file
    gulp.src(['./index.coffee'])
      .pipe(insert.prepend("env = '" + options.env + "'\n"))
      .pipe(coffee({
        bare: true
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./'));

  }
  
  // Don't minify
  else {
    gulp.src(['./lib/coffee/**/*.coffee'])
      .pipe(insert.prepend("env = '" + options.env + "'\n"))
      .pipe(coffee({
        bare: true
      }))
      .pipe(gulp.dest('./public/js'));

    // Special case for the node index.js file
    gulp.src(['./index.coffee'])
      .pipe(insert.prepend("env = '" + options.env + "'\n"))
      .pipe(coffee({
        bare: true
      }))
      .pipe(gulp.dest('./')); 

    // Special case for testing
    gulp.src(['./tests/test.coffee'])
      .pipe(coffee())
      .pipe(gulp.dest('./tests'));

  }

});

gulp.task('compile:jade', function() {
    gulp.src(['./lib/jade/**/*.jade'])
      .pipe(jade({
        locals: options,
        pretty: true
      }))
      .pipe(gulp.dest('./public/'));
});

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: options.port,
    root: 'public'
  });
});

gulp.task('watch' , function() {
  gulp.watch(['./lib/sass/**/*.{sass, scss}'], ["compile:sass"]);
  gulp.watch(['./lib/jade/**/*.jade'], ["compile:jade"]);
  gulp.watch(['./lib/coffee/**/*.coffee'], ["compile:coffee"]);
});
