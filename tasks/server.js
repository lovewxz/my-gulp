import gulp from 'gulp'
import gulpif from 'gulp-if'
import webserver from 'gulp-webserver'
import args from './util/args'
import {pathDir,getDistName} from './util/config'

// 注册任务
gulp.task('server', (cb) => {
  if (!args.watch) return cb()
  gulp.src(getDistName(pathDir))
  .pipe(webserver({
    port: 9999,
    host: '172.16.1.143',
    livereload: true,
    open: true
  }))

})
