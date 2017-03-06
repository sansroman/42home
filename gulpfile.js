var browserSync = require("browser-sync");
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var gulp = require('gulp');

//启动express
gulp.task('node',function() {
    nodemon({
        script:'./bin/www',
        ext:'js html',
        env: {
            'NODE_ENV' : 'development'
        }
    })
});
//server任务
gulp.task('server',["node"],function (){
    var files = [
        'views/**/*.*',
        'public/**/*.*'
    ];
    //gulp.run(["node"]);
    browserSync.init(files,{
        proxy:'http://localhost:3000',
        browser:'chrome',
        notify: false,
        port:3001
    });
    gulp.watch(files).on("change",reload);
})