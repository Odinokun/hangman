'use strict';

module.exports = function() {

  $.gulp.task('watch', function() {
    $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));

    $.gulp.watch('./src/style/**/*.scss', $.gulp.series('sass'));

    $.gulp.watch('./src/js/**/*.js', $.gulp.series('copy:js'));

    $.gulp.watch('./src/img/**/*.*', $.gulp.series('image:min'));
  });

};
