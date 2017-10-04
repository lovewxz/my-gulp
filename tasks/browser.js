import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import args from './util/args'
import {pathDir} from './util/config'

gulp.task('browser', (cb) => {
  if (!args.watch) return cb()
  gulp.watch(`${pathDir}/js/*.js`, ['scripts'])
  gulp.watch(`${pathDir}/*.html`, ['pages'])
  gulp.watch(`${pathDir}/css/*.css`, ['css'])
  gulp.watch(`${pathDir}/images/*.{png,jpg,gif,svg}`, ['images'])
  gulp.watch(`${pathDir}/css/*.scss`, ['css'])
})
