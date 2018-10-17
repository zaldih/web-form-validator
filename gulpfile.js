const gulp = require('gulp');
const minify = require('gulp-minify');
const purify = require('gulp-purify-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const useref = require('gulp-useref');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');
const browserSync = require('browser-sync').create();


gulp.task('minify', () => {
    gulp.src(['app.js', 'test/*.js', 'services/*.js', 'controllers/*.js', 'constants/*.js', 'assets/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('autoprefixer', () => {
    gulp.src('assets/styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(purify(['.html']))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('imagemin', () => {
    gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
});

gulp.task('useref', () => {
    gulp.src('*.html')
        .pipe(useref())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'))
        .pipe(browserSync.stream());
});



gulp.task('default', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(['form.html', 'app.js', 'test/*.js', 'services/*.js', 'controllers/*.js', 'constants/*.js', 'assets/*.js'], () => {
       gulp.run('minify');
       gulp.run('autoprefixer');
       gulp.run('imagemin');
       gulp.run('useref');
    });
 });