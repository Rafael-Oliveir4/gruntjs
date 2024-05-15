module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './build/style/main.css':'./source/style/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    './build/style/main.min.css' : './source/style/main.less'
                }
            }
            
        },
        watch: {
            less: {
                files: ['source./style/**/*.less'],
                tasks: ['less:development']
            }
        },
        uglify: {
            target: {
                files: {
                    'build/script/main.min.js': 'source/script/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);
    
}