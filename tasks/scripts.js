import gulp from 'gulp' //gulp服务器
import gulpif from 'gulp-if' //gulp if判断命令
import concat from 'gulp-concat' //gulp 连接字符串
import named from 'vinyl-named' //对文件重命名做标志
import plumber from 'gulp-plumber' //处理文件信息流
import rename from 'gulp-rename' //对文件重命名
import uglify from 'gulp-uglify' //处理js,css的压缩
import rev from 'gulp-rev'
import {
  log,
  colors
} from 'gulp-util'
import livereload from 'gulp-livereload'
import args from './util/args';
import { pathDir, getDistName } from './util/config'
import babel from 'gulp-babel'


gulp.task('scripts', () => {
  return gulp.src('public/js/*.js')
    .pipe(plumber({
      errorHandle: function () {

      }
    }))
    .pipe(concat('all.js'))
    .pipe(uglify({
      compress: {
        properties: false
      },
      output: {
        'quote_keys': true
      }
    }))
    .pipe(gulpif(!args.watch, rev()))
    .pipe(gulp.dest(`${getDistName(pathDir)}/js`)) //压缩后的文件存储的目录
    .pipe(gulpif(!args.watch, rev.manifest()))
    .pipe(gulpif(!args.watch, gulp.dest(`${getDistName(pathDir)}/rev/js`)))
    .pipe(gulpif(args.watch, livereload()))
})


gulp.task('convertJs', () => {
  return gulp.src(`${pathDir}/js/*.js`)
    .pipe(plumber({
      errorHandle: function () {

      }
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify({
      compress: {
        properties: false
      },
      output: {
        'quote_keys': true
      }
    }))
    .pipe(concat('my.js'))
    .pipe(gulpif(!args.watch, rev()))
    .pipe(gulp.dest(`${getDistName(pathDir)}/js`)) //压缩后的文件存储的目录
    .pipe(gulpif(!args.watch, rev.manifest()))
    .pipe(gulpif(!args.watch, gulp.dest(`${getDistName(pathDir)}/rev/cvjs`)))
    .pipe(gulpif(args.watch, livereload()))
})
