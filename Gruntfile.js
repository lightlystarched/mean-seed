module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		watch: {
			recess: {
				files: ['less/*.less'],
				tasks: ['recess:dist'],
				options: {
					liveReload: true
				}
			}
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
					ignoredFiles: ['README.md'],
					watchedExtensions: ['js']
				}
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon', 'recess', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
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