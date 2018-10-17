const gulp = require('gulp');
const minify = require('gulp-minify');
const purify = require('gulp-purify-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const useref = require('gulp-useref');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');


gulp.task('minify', () => {
    gulp.src(['app.js', 'test/*.js', 'services/*.js', 'controllers/*.js', 'constants/*.js', 'assets/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('autoprefixer', () => {
    gulp.src('assets/styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(purify(['.html']))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('imagemin', () => {
    gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('useref', () => {
    gulp.src('*.html')
        .pipe(useref())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});



gulp.task('default', function() {
    // watch for CSS changes
    gulp.watch(['app.js', 'test/*.js', 'services/*.js', 'controllers/*.js', 'constants/*.js', 'assets/*.js'], function() {
       gulp.run('minify');
       gulp.run('autoprefixer');
       gulp.run('imagemin');
       gulp.run('useref');
    });
 });