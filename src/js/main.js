/*global define*/
define([
    'jquery',
    'util/random'
], function ($) {
    'use strict';
    return {
        run: function () {
            $('#randomNumber').text(Math.randomBelow(42));
        }
    };
});

