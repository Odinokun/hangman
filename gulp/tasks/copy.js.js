'use strict';

module.exports = function() {

  $.gulp.task('copy:js', function() {
    return $.gulp.src('src/js/app.js')
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })

};
