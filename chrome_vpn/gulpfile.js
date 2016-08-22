var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');

// 创建本地服务器
gulp.task('server', function() {
    connect.server({
        name: 'DevelopServer',
        root: './',
        port: 1378,
        livereload: true
    });
});

// 编译CSS文件
gulp.task('less', function() {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //格式调整
            remove: true //移除重复的样式
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
})

// html更改刷新页面
gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(connect.reload());
})

// js更改刷新页面
gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(connect.reload());
})

// 监听页面变化
gulp.task('watch', ['less'], function() {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/js/*.js', ['js']);
})

gulp.task('default', ['server', 'watch']);
