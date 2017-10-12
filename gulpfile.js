var gulp = require('gulp');
var browser = require('browser-sync');
var sass = require('gulp-sass');
gulp.task('sass', function() {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browser.stream());
})

gulp.task('serve', function() {
  browser.init({server: './app'});
  gulp.watch('./app/scss/*.scss', ['sass']);
  gulp.watch(['app/*', 'app/js/*']).on('change', browser.reload);
});

gulp.task('thuy', function() {
  browser.init({server: './thuy'});
  gulp.watch('./thuy/*').on('change', browser.reload);
});