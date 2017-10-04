import gulp from 'gulp'
import gulpif from 'gulp-if'
import revCollector from 'gulp-rev-collector'
import args from './util/args'
import {pathDir,getDistName} from './util/config'

gulp.task('revc', () => {
  return gulp.src([`${getDistName(pathDir)}/rev/**/*.json`,`${getDistName(pathDir)}/index.html`])
             .pipe(revCollector())
             .pipe(gulp.dest(getDistName(pathDir)))
})
