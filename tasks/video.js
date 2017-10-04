import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args';
import {pathDir,getDistName} from './util/config'

gulp.task('video', () => {
  return gulp.src(`${pathDir}/images/*.mp4`)
             .pipe(gulp.dest(`${getDistName(pathDir)}/images`))
             .pipe(gulpif(args.watch, livereload()))
})
