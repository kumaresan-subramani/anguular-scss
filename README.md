Below is my import statment

```
@import '../../node_modules/@syncfusion/ej2-angular-grids/styles/material.scss';

.checking {
    @import '../../node_modules/@syncfusion/ej2-angular-grids/styles/material-dark.scss';
}
```
my gulp task is like below:

```
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

```

when i compile, it wont generate all required class for 2nd import inside `checking` class

Sample - https://github.com/kumaresan-subramani/anguular-scss

To Run Sample - 

1. npm i
2. gulp styles
3. ng serve
