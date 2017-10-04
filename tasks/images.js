import gulp from 'gulp'
import gulpif from 'gulp-if'
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import changed from 'gulp-changed'
import livereload from 'gulp-livereload'
import args from './util/args';
import {pathDir,getDistName} from './util/config'

gulp.task('images', () => {
  return gulp.src(`${pathDir}/images/*.{png,jpg,gif,svg}`)
             .pipe(changed(`${getDistName(pathDir)}/images`))
             .pipe(imagemin({
                progressive: true, // 无损压缩JPG图片
                svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
                use: [pngquant()] // 使用pngquant插件进行深度压缩
             }))
             .pipe(gulp.dest(`${getDistName(pathDir)}/images`))
             .pipe(gulpif(args.watch, livereload()))
})
