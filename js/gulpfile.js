var gulp = require('gulp'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');


var outputDir = 'build/';
gulp.task('jade', function() {
    return gulp.src('*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir + ''))
        .pipe(connect.reload());
});


gulp.task('js', function() {
    return gulp.src('main.js')
        .pipe(gulp.dest(outputDir + 'js/'))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    return gulp.src('**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest(outputDir + 'css/'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('*.jade', ['jade']);
    gulp.watch('**/*.sass', ['sass']);
    gulp.watch('main.js', ['js']);
});

gulp.task('connect', function() {
    connect.server({
        root: [outputDir],
        livereload: true
    });
});

gulp.task('default', ['jade', 'sass', 'js', 'watch', 'connect']);