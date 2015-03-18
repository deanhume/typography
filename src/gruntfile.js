module.exports = function (grunt) {

grunt.initConfig({
    cssmin: {
            dist: {
                files: [
                    { src: 'stylesheets/about.css', dest: 'stylesheets/about.min.css' },
                    { src: 'stylesheets/articles.css', dest: 'stylesheets/articles.min.css' },
                    { src: 'stylesheets/books.css', dest: 'stylesheets/books.min.css' },
                    { src: 'stylesheets/combinations.css', dest: 'stylesheets/combinations.min.css' },
                    { src: 'stylesheets/home.css', dest: 'stylesheets/home.min.css' },
                    { src: 'stylesheets/normalize.css', dest: 'stylesheets/normalize.min.css' },
                    { src: 'stylesheets/performance.css', dest: 'stylesheets/performance.min.css' },
                    { src: 'stylesheets/skeleton.css', dest: 'stylesheets/skeleton.min.css' },
                    { src: 'stylesheets/tools.css', dest: 'stylesheets/tools.min.css' }
                ]
            }
        },
    critical: {
            dist: {
                options: {
                    base: './'
                },
                files: [
                    {src: ['about-critical.html'], dest: 'about.html'}
                ]
            }
        }
    })

    // Load the plugins
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks.
    grunt.registerTask('default', ['cssmin', 'critical']);

};
