// Load the plugins
const gulp = require('gulp');
const concatenate = require('gulp-concat-css');
const minify = require('gulp-cssmin');
const duration = require('gulp-duration');
const mocha = require('gulp-mocha');

// Task configuration
gulp.task('default', function() {
  gulp.src('src/*.css')
  // Combine all CSS files found inside the src directory
  .pipe(concatenate('styles.min.css'))
  // Minify the stylesheet
  .pipe(minify())
  // Report the task-execution time in the command line
  .pipe(duration('Execution Time: '))
  // Write the minified file in the css directory
  .pipe(gulp.dest('css/'));
});
// Use `gulp` command to run the task

exports.default = () => (
    gulp.src('test.js', {read: false})
        // `gulp-mocha` needs filepaths so you can't have any plugins before it
        .pipe(mocha())
        .once('error', err => {
            console.error(err);
            process.exit(1);
        })
);