/*global require*/
require.config({
    baseUrl: '../js',

    paths: {
        jquery: '../lib/jquery',
        sinon: '../test/lib/sinon'
    },

    shim: {
        jquery : { exports: '$'},
        sinon: { exports: 'sinon'}
    }
});
