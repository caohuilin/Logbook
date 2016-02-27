var gulp = require('gulp');


var less = require('gulp-less');
var path = require('path');
var react = require('gulp-react');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    console.log('hello')
});

gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('jsx', function () {
    return gulp.src([ "./src/jsx/Config.js","./src/jsx/Util.js", "./src/jsx/Calender.js", "./src/jsx/Caption.js", "./src/jsx/Content.js", "./src/jsx/Dates.js", "./src/jsx/Departments.js", "./src/jsx/Header.js", "./src/jsx/Inf.js", "./src/jsx/LeftArea.js", "./src/jsx/NoteBtn.js", "./src/jsx/NoteMe.js", "./src/jsx/RightArea.js", "./src/jsx/User.js", "./src/jsx/UserInf.js", "./src/jsx/Main.js","./src/jsx/Router.js"])
        .pipe(react())
        .on('error', function(err){
            console.log(err);
            this.end();
        })
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('copy_img', function () {
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./public/img'));
});

gulp.task('copy_lib', function () {
    return gulp.src('./src/lib/*')
        .pipe(gulp.dest('./public/lib'));
});

gulp.task('watch', function () {
    gulp.watch('./src/jsx/*.js', ['jsx']);
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/img/*', ['copy_img']);
    gulp.watch('./src/lib/*', ['copy_lib']);
});

gulp.task('clean', function () {
    return gulp.src('./public', {read: false})
        .pipe(clean());
});

gulp.task('build', function () {
    runSequence('clean',
        ['less', 'jsx', 'copy_img', 'copy_lib']);
});

