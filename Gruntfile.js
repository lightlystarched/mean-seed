'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // configuration path for application
  var appConfig = {
  	app: require('./bower.json').appPath || 'public',
  	dist: 'dist'
  };

	// Project configuration.
	grunt.initConfig({
		mean: appConfig,
		watch: {
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			},
      js: {
        files: ['<%= mean.app %>/javascripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
			recess: {
				files: ['less/*.less'],
				tasks: ['recess:dist'],
				options: {
					liveReload: true
				}
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
          '/{,*/}*.jade',
          '<%= mean.app %>/.tmp/styles/{,*/}*.css',
          '<%= mean.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},
		connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '<%= mean.app %>/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/sphere_components',
                connect.static('./sphere_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= mean.dist %>'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'/*,
        reporter: require('jshint-stylish')*/
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= mean.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= mean.dist %>/.tmp',
            '<%= mean.dist %>/{,*/}*',
            '!<%= mean.dist %>/.git*'
          ]
        }]
      },
      server: '<%= mean.dist %>/.tmp'
    },
		recess: {
			dist: {
				options: {
					compile: true
				},
				files: {
					'public/stylesheets/style.css': [
						'less/style.less'
					]
				}
			}
		},
		nodemon: {
			dev: {
				options: {
					file: 'app.js',
					delayTime: 1,
					ignoredFiles: ['README.md', 'less/**'],
					watchedExtensions: ['js']
				}
			}
		},
		concurrent: {
			server: {
				tasks: ['nodemon', 'recess', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});

	grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

	// Load the plugins.
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	// Default task(s).
	grunt.registerTask('default', ['concurrent']);

	//require('./app')(grunt);

};