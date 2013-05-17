module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'styles/screen.css': [
            'components/normalize-css/normalize.css',
            'sass/screen.scss'
          ]
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          'styles/screen.min.css': ['styles/screen.css']
        }
      }
    },

    watch: {
      files: ['sass/*.scss'],
      tasks: 'sass'
    }
  });

  grunt.registerTask('build', ['sass', 'cssmin']);

  grunt.registerTask('default', ['sass', 'watch']);
}
