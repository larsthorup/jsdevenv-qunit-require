/*global define, module, test, equal*/
define(['sinon', 'jquery', 'main'], function (sinon, $, main) {
    'use strict';

    module('main', {
        setup: function () {
            sinon.stub(Math, 'random').returns(0.85);
            this.fixture = $('<div id="randomNumber"></div>').appendTo('body');
        },
        teardown: function () {
            Math.random.restore();
            this.fixture.remove();
        }
    });

    test('run', function () {
        main.run();
        equal(this.fixture.text(), '35');
    });
});