/*global require*/
require.config({
    baseUrl: '../js',

    paths: {
        jquery: '../lib/jquery',
        test: '../test/js',
        qunit: '../test/lib/qunit',
        sinon: '../test/lib/sinon'
    },

    shim: {
        jquery : { exports: '$'},
        qunit: { exports: 'QUnit'},
        sinon: { exports: 'sinon'}
    }
});
