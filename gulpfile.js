const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const GulpUglify = require('gulp-uglify')
const image = require('gulp-image')

gulp.task('styles', function() {

    return gulp.src('./vendor/styles.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'))
})


gulp.task('js', function() {

    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(GulpUglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('image', function() {
    return gulp.src('./vendor/img/*')
    .pipe(image({
        pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
    }))
})
