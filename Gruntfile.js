/*global module*/
/*jshint camelcase:false*/ // because of gruntConfig.qunit_junit
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['lint', 'test']);
    grunt.registerTask('all', ['lint', 'test']);

    // continuous integration
    grunt.registerTask('ci', ['lint', 'test']);


    // lint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    gruntConfig.jshint = {
        options: { bitwise: true, camelcase: true, curly: true, eqeqeq: true, forin: true, immed: true,
            indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, plusplus: true,
            quotmark: true, regexp: true, undef: true, unused: true, strict: true, trailing: true,
            maxparams: 3, maxdepth: 2, maxstatements: 50},
        all: [
            'Gruntfile.js',
            'src/**/*.js',
            '!src/lib/**/*',
            '!src/test/lib/**/*'
        ]
    };
    grunt.registerTask('lint', 'jshint');


    // connect
    grunt.registerTask('wait', 'keep running until terminated', function () {
        /* var done =*/
        this.async();
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    gruntConfig.connect = {};
    gruntConfig.connect.src = {
        options: {
            port: 8082,
            base: 'src'
        }
    };


    // test
    grunt.loadNpmTasks('grunt-qunit-junit');
    gruntConfig.qunit_junit = {
        options: {
            dest: 'output/testresults'
        }
    };
    grunt.loadNpmTasks('grunt-contrib-qunit');
    gruntConfig.qunit = {};
    gruntConfig.qunit.src = [
        'src/test/all.test.html'
    ];
    gruntConfig.qunit.connect = {
        options: {
            urls: ['http://localhost:8082/test/all.test.html']
        }
    };
    // grunt.registerTask('test', ['connect:src', 'qunit_junit', 'qunit:connect']);
    grunt.registerTask('test', ['qunit_junit', 'qunit:src']);


    // grunt
    grunt.initConfig(gruntConfig);
};