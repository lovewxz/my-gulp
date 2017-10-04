import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'

gulp.task('build', gulpSequence('css', 'pages', 'scripts','convertJs','revc','video','images','png','cleanRev',['browser','server']))
