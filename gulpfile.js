var gulp = require('gulp');
var less = require('gulp-less');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 8888,
    root: 'dist',
    livereload: true
  });
});


gulp.task('rq', shell.task([
  'r.js.cmd -o development/build.js'
]));


gulp.task('less', function() {
  gulp.src('development/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});


gulp.task('req-build-reload', ['rq'], function() {
  gulp.src('development/less/styles.less').pipe(less()).pipe(gulp.dest('dist/css'));
  // removing fils not needed 
  gulp.src('dist/less', {read: false}).pipe(clean());
  gulp.src('dist/build.txt', {read: false}).pipe(clean());
  setTimeout(function () {
    gulp.src('dist/build.js', {read: false}).pipe(clean()).pipe(connect.reload());
  }, 1000);
});


gulp.task('req-build', ['rq'], function() {
  // removing fils not needed
  gulp.src('dist/less', {read: false}).pipe(clean());
  gulp.src('dist/build.txt', {read: false}).pipe(clean());
  gulp.src('dist/build.js', {read: false}).pipe(clean());

  // runing less build
  gulp.src('development/less/styles.less').pipe(less()).pipe(gulp.dest('dist/css'));
});


gulp.watch('development/**/*.html',['req-build-reload']).on('change', function(file) {
  console.log('** change file [html]:', file);
});


gulp.watch('development/**/*.less', ['less']).on('change', function(file) {
  console.log('** change file [less]:', file);
});


gulp.watch('development/**/*.js', ['req-build-reload']).on('change', function(file) {
   console.log('** change file [js]:', file);
});

// gulp backup --path ../tesfile/path/to
gulp.task('backup', function() {
  if(process.argv[3] == '--path'){
    if(process.argv[4]){
      gulp.src('development/**/*').pipe(gulp.dest(''+process.argv[4]+'/backup-'+getDateTime()+''));
    }    
  } else {
    gulp.src('development/**/*').pipe(gulp.dest('backups/backup-'+getDateTime()+''));
  }
});


gulp.task('init', function() {
  gulp.src('.git', {read: false}).pipe(clean());
  console.log('Pukka!!! Your Development Environment is Ready.....');
});


function getDateTime() {
      var date = new Date();
      var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
      var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
      var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;
      var day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;
      return year + "-" + month + "-" + day + "T" + hour + "-" + min + "-" + sec;
  }


gulp.task('build', ['req-build']);
gulp.task('connectServer', ['connect']);
gulp.task('default', ['build', 'connectServer']);