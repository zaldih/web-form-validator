const gulp = require("gulp");
const minify = require("gulp-minify");
const purify = require("gulp-purify-css");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const useref = require("gulp-useref");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("minjs", () => {
  gulp
    .src([
      "app.js",
      "test/*.js",
      "services/*.js",
      "controllers/*.js",
      "constants/*.js",
      "assets/*.js"
    ])
    .pipe(minify({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("mincss", () => {
  gulp
    .src("assets/styles/*.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(purify(["*.html"]))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("minimage", () => {
  gulp
    .src("assets/img/*")
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.stream());
});

gulp.task("minhtml", () => {
  gulp
    .src("*.html")
    .pipe(useref())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/html"))
    .pipe(browserSync.stream());
});

gulp.task("run", () => {
  gulp.run("minjs");
  gulp.run("mincss");
  gulp.run("minimage");
  gulp.run("minhtml");
});

gulp.task("default", function() {
    gulp.run('run');
    gulp.watch(
      [
        "form.html",
        "app.js",
        "test/*.js",
        "services/*.js",
        "controllers/*.js",
        "constants/*.js",
        "assets/*.js"
      ],
      () => {
        gulp.run('run');
      }
    );
  browserSync.init({
    server: "./dist/"
  });
});
