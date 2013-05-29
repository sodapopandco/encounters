module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      compile: {
        options: {
          precision: 3
        },
        files: {
          'styles/screen.css': ['sass/screen.scss']
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

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['styles/screen.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['styles/screen.css']
      }
    },

    concat: {
      join: {
        files: {
          'styles/screen.css': ['components/normalize-css/normalize.css', 'styles/screen.css']
        }
      }
    },

    cssmin: {
      compress: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'styles/screen.min.css': ['styles/screen.css']
        }
      }
    },

    watch: {
      files: ['**/*.html', 'sass/**/*.scss'],
      tasks: ['sass', 'autoprefixer', 'csslint:lax', 'concat']
    }
  });

  grunt.registerTask('build', ['sass', 'autoprefixer', 'csslint:strict', 'concat', 'cssmin']);

  grunt.registerTask('default', ['watch']);
}
