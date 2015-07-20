module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            styles: {
                files: ['source/**/*.scss'],
                tasks: ['sass']
            }
        },

        sass: {
            dist: {
                files: {
                    'generated/styles.css': 'source/styles.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};
