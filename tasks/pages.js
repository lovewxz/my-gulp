import gulp from 'gulp'
import gulpif from 'gulp-if'
import htmlmin from 'gulp-htmlmin';
import livereload from 'gulp-livereload'
import args from './util/args';
import { pathDir, getDistName } from './util/config'
import babel from 'gulp-babel'

gulp.task('pages', () => {
  let options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  }
  return gulp.src(`${pathDir}/*.html`)
    .pipe(htmlmin(options))
    .pipe(gulp.dest(getDistName(pathDir)))
    .pipe(gulpif(args.watch, livereload()))
})
