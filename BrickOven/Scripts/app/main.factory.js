(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('propList', propList)

    function propList($http) {
        var list = $http.post("/api/finder/years", { n: "nothing" })
            .success(function (data, status, headers, config) {
                vm.years = data
            })
            .error(function (data, status, headers, config) {
                Console.log("Error!!", data)
            })
        return list
    }
})()
