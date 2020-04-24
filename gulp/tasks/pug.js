'use strict';

module.exports = function() {

  $.gulp.task('pug', function() {
    return $.gulp.src('./src/pug/pages/*.pug')
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gp.prettify({
        preserve_newlines: true,
        indent_char: ' ',
        indent_size: 2}))
      .pipe($.gp.cached('pug'))
      .pipe($.gulp.dest($.config.root));
  });

};
