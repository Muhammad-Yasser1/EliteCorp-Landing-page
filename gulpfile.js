const gulp = require("gulp"),
    concat = require("gulp-concat"),
    prefix = require("gulp-autoprefixer"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    sourceMaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify"),
    imagemin = require("gulp-image"),
    include = require("gulp-include"),
    livereload = require("gulp-livereload"),
    zip = require("gulp-zip");

gulp.task("images", () => {
    return gulp
        .src("src/imgs/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/imgs"))
        .pipe(livereload());
});

gulp.task("html", () => {
    return gulp
        .src("src/pages/Home/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("./build"))
        .pipe(livereload());
});

gulp.task("styles", () => {
    return gulp
        .src("src/styles/*.scss")
        .pipe(sourceMaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(prefix("last 2 versions"))
        .pipe(concat("style.css"))
        .pipe(sourceMaps.write("."))
        .pipe(gulp.dest("./build/css"))
        .pipe(livereload());
});

gulp.task("scripts", () => {
    return gulp
        .src("src/scripts/*.js")
        .pipe(include())
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./build/js"))
        .pipe(livereload());
});

gulp.task("compress", () => {
    return gulp.src("build").pipe(zip("website.zip")).pipe(gulp.dest("."));
});

gulp.task("watch", () => {
    livereload.listen();
    gulp.watch("src/pages/**/*.pug", ["html"]);
    gulp.watch("src/styles/**/*.scss", ["styles"]);
    gulp.watch("src/scripts/*.js", ["scripts"]);
    // gulp.watch("build/**/*.*", ["compress"]);
});
