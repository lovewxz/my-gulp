import gulp from 'gulp'
import del from 'del'
import {pathDir,getDistName} from './util/config'

gulp.task('cleanRev', () => {
  return del([`${getDistName(pathDir)}/rev`])
})
