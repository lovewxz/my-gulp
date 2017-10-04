import gulp from 'gulp'
import del from 'del'
import {pathDir,getDistName} from './util/config'

gulp.task('clean', () => {
  return del([getDistName(pathDir)])
})
