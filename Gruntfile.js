/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
  });

  // load modules
  task.loadNpmTasks('grunt-update-submodules');

  // Default task.
  grunt.registerTask('default', [
    'update_submodules',
    'build'
  ]);

  grunt.registerTask('build', function () {
    var done = this.async();
    var path = require('path');

    var subModDir = path.join(__dirname, './elasticsearch-js');

    npmInit(function () {
      makeBuild(function () {
        done();
      });
    });

    function npmInit(cb) {
      grunt.util.spawn({
        cmd: "npm",
        args: [ "install" ],
        opts: {
          cwd: subModDir
        }
      }, function (err, out) {
        if (error) {
          grunt.verbose.error(error);
          done(error);
          return;
        } else {
          cb();
        }
      });
    }

    function makeBuild(cb) {
      grunt.util.spawn({

      }, function (err, out) {

      })
    }

  });

};
