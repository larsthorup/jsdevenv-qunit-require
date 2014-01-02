/*global define, module, test, equal, throws*/
define(['sinon', 'util/random'], function (sinon) {
    'use strict';

    module('util.random', {
        setup: function () {
            sinon.stub(Math, 'random').returns(0.85);
        },
        teardown: function () {
            Math.random.restore();
        }
    });

    test('randomBelow', function () {
        equal(Math.randomBelow(6), 5, '6');
        equal(Math.randomBelow(1), 0, '1');
        throws(function () { Math.randomBelow(0); }, 'invalid argument: 0', '0');
    });
});