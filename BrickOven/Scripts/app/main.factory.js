(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('propList', propList)

    function propList($http) {
        var li = []
        var promise = $http.get("/api/finder/years")
            .success(function (data) {
                return data
            })
            .error(function (data, status, headers, config) {
                return data, status
            })
        return promise
    }
})()
