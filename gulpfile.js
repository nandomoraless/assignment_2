const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

function style() {

    return gulp.src('./sass/**/*.scss')

        .pipe(sass())

        .pipe(gulp.dest('./'))


        // Stream Changes to all browsers
        .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}



gulp.task('concat', function () {
    return gulp.src('./js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'));
});


exports.style = style;
exports.watch = watch;