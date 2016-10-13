const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
   gulp.src('views/images/*')
       .pipe(imagemin({
         optimizationLevel: 5
       }))
       .pipe(gulp.dest('dist/images'))
);
