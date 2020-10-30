// gulpfile.js思路整理，不规范书写

// 引入gulp文件
const gulp = require('gulp');
// 下载gulp环境：npm i -D gulp

// 任务一：压缩css文件夹里的文件
// 1. 引入gulp-cssmin这个第三方文件,压缩css文件
const cssmin = require('gulp-cssmin')
// 下载gulp环境：npm i -D gulp-cssmin
// 2. 引入gulp-autoprofixer这个第三方文件，自动添加前缀
const autoprefixer = require('gulp-autoprefixer')
// 下载gulp环境：npm i -D gulp-autoprefixer
/* 
    使用autoprefixer需要 在package.json里面设置浏览器列表
    "browserslist": [
        "last 2 versions",
        "iOS>7",
        "Firefox < 20",
        "last 2 Explorer versions"
    ]
*/
// 3. 书写一个函数
const cssHeadler = () => {
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

// 任务二：移动src里面images里的文件夹
const imgHeadler = () => {
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}

const fontHeadler = () => {
    return gulp.src('./src/font/**')
    .pipe(gulp.dest('./dist/font'))
}

// 任务三：压缩src里面的js文件夹里的js文件
const babel = require('gulp-babel'); //es6转es5
const uglify = require('gulp-uglify') //压缩js文件
/* 
    下载包的时候,除了gulp-babel还有另外两个包:@babel/core @babel/preset-env
*/
// 下载gulp环境：npm i -D gulp-babel
// npm i -D @babel/core @babel/preset-env
const jsHeadler = () => {
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

// 任务四：移动lib文件
const libHeadler = () => {
    return gulp.src('./src/lib/*.js')
    .pipe(gulp.dest('./dist/lib'))
}

// 任务五：压缩src里的pages文件夹里面的html文件
const htmlmin = require('gulp-htmlmin');
// 下载gulp环境：npm i -D gulp-htmlmin
const htmlHeadler = () => {
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes:true, //移除属性的引号
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true,//移除注释
        minifyCSS:true,//把页面里面的style标签里面的css样式也去空格
        minifyJS:true,//把页面里的script标签里面的js代码给去空格
    }))
    .pipe(gulp.dest('./dist/pages'))
}

// 任务六：开启以dist为网站根目录的热更新的web服务器
// 引入webserver
const webserver = require('gulp-webserver');
// 下载gulp环境：npm i -D gulp-webserver
const serverHeadler = () => {
    return gulp.src('./dist')
    .pipe(webserver({
        port:8080, //监听端口
        open:'./pages/index.html', //打开网页
        livereload:true, //热更新
        proxies:[{ //设置代理
            source:'/weather',
            target:'https://way.jd.com/jisuapi/weather'
        }]
    }))
}

// 任务七：监控src文件夹下面的所有文件
const watchHeadler = () => {
    gulp.watch('./src/css/*.css',cssHeadler);
    gulp.watch('./src/js/*.js',jsHeadler);
    gulp.watch('./src/pages/*.html',htmlHeadler);
    gulp.watch('./src/images/**',imgHeadler);
    gulp.watch('./src/font/**',fontHeadler);
    gulp.watch('./src/lib/*.js',libHeadler)
    gulp.watch('./src/sass/*.scss',sassHeadler)
}

// 任务八：删除dist目录
const del = require('del')
// 下载gulp环境：npm i -D del
const delHeadler = () => {
    return del(['./dist'])
}

// 任务九：编译和压缩src文件夹里的sass文件夹里的scss文件到dist目录中的css文件中
const sass = require('gulp-sass');
const sassHeadler = () => {
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

// 导入默认任务
module.exports.default = gulp.series(
    delHeadler,
    gulp.parallel(
        cssHeadler,
        imgHeadler,
        fontHeadler,
        jsHeadler,
        libHeadler,
        htmlHeadler,
        sassHeadler
    ),
    serverHeadler,
    watchHeadler
)