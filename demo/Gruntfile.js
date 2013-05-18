module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      compile: {
        files: {
          'styles/screen.css': [
            'components/normalize-css/normalize.css',
            'sass/screen.scss'
          ]
        }
      }
    },

    autoprefixer: {
      prefix: {
        files: {
          'styles/screen.css': ['styles/screen.css']
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
      tasks: ['sass', 'autoprefixer']
    }
  });

  grunt.registerTask('build', ['sass', 'autoprefixer', 'cssmin']);

  grunt.registerTask('default', ['watch']);
}
