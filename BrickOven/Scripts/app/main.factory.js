(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('BrickFactory', brickFactory)

    function brickFactory($http) {
        var msg = { 
            what: "Is going on?" 
        }
        return msg
    }
})()
