import gulp from 'gulp' //gulp服务器
import gulpif from 'gulp-if'
import concat from 'gulp-concat' //gulp 连接字符串
import plumber from 'gulp-plumber' //处理文件信息流
import cleanCSS from 'gulp-clean-css'
import rev from 'gulp-rev'
import autoprefixer from 'gulp-autoprefixer';
import livereload from 'gulp-livereload'
import args from './util/args';
import {pathDir,getDistName} from './util/config'
import sass from 'gulp-sass'

gulp.task('css', () => {
  return gulp.src(['public/css/*.css',`${pathDir}/css/*.css`,`${pathDir}/css/*.scss`])
    .pipe(plumber({
      errorHandle: function() {

      }
    }))
    .pipe(concat('css.min.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulpif(!args.watch,rev()))
    .pipe(gulp.dest(`${getDistName(pathDir)}/css`)) //压缩后的文件存储的目录
    .pipe(gulpif(!args.watch,rev.manifest()))
    .pipe(gulpif(!args.watch,gulp.dest(`${getDistName(pathDir)}/rev/css`)))
    .pipe(gulpif(args.watch, livereload()))
})
