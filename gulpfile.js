const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) //converter sass em css
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
