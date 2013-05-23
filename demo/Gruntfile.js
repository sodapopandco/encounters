module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      compile: {
        options: {
          config: 'config.rb'
        }
      }
    },

    autoprefixer: {
      prefix: {
        files: {
          'styles/main.css': ['styles/main.css']
        }
      }
    },

    csslint: {
      strict: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['styles/main.css']
      }
    },

    concat: {
      join: {
        files: {
          'styles/screen.css': ['components/normalize-css/normalize.css', 'styles/main.css']
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
      files: ['sass/**/*.scss'],
      tasks: ['compass', 'autoprefixer', 'csslint','concat']
    }
  });

  grunt.registerTask('build', ['compass', 'autoprefixer', 'concat', 'cssmin']);

  grunt.registerTask('default', ['watch']);
}
