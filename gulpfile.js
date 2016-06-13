"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    livereload = require('gulp-livereload');

//gulp.task('watch', function () {    // 这里的watch，是自定义的，写成live或者别的也行
//    var server = livereload();
//
//    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
//    gulp.watch('app/**/*.*', function (file) {
//        server.changed(file.path);
//    });
//});

gulp.task('watch', function () {
    gulp.watch(['WebContent/**/*.*']);
    //gulp.watch(['WebContent/!**!/!*.html']);
    //gulp.watch(['WebContent/!**/!*.js']);
});

gulp.task('connect', function(){
    connect.server({
        root: 'WebContent',
        port: 8888,
        livereload: true
    })
});

gulp.task('default', ['connect', 'watch']);


