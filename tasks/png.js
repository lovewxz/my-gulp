import gulp from 'gulp'
import gulpif from 'gulp-if'
import args from './util/args';
import tinypng from 'gulp-tinypng'
import changed from 'gulp-changed'
import { pathDir, getDistName } from './util/config'

gulp.task('png', () => {
  return gulp.src(`${pathDir}/images/*.png`)
    .pipe(changed(`${getDistName(pathDir)}/images`))
    .pipe(gulpif(!args.watch, tinypng('A1ShgOLPPT0ganDFlg4LyOtyKh2en8XW')))
    .pipe(gulp.dest(`${getDistName(pathDir)}/images`))
})
