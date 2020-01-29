var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    sass.compiler = require('node-sass');
    return gulp.src("./check/*.scss")
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ["./node_modules/@syncfusion/"]
        }))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./src/'));
});