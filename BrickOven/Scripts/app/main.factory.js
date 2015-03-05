(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('propList', propList)

    function propList($http) {
        var lym = []
        $http.get("/api/finder/years")
            .success(function (data) {
                lym = data
            })
            .error(function (data, status, headers, config) {
                lym = data, status
            })
        return lym 
    }
})()
