const {src,dest,watch,series}=require('gulp')
const sass=require('gulp-sass')(require('sass'))

function buildMyStyle(){
  return src('scssFile/**/*.scss')
  .pipe(sass())
  .pipe(dest('css'))
}

function watchBuildingStyle(){
  watch(['scssFile/**/*.scss'], buildMyStyle)
}

exports.default=series(buildMyStyle,watchBuildingStyle);