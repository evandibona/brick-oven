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
        $http.post("/api/finder/years", { n: "nothing" })
            .success(function (data, status, headers, config) {
                vm.years = data
            })
            .error(function (data, status, headers, config) {
                Console.log("Error!!", data)
            })
        $http.post("/api/finder/makes", { n: "nothing" })
            .success(function (data, status, headers, config) {
                vm.makes = data
            })
            .error(function (data, status, headers, config) {
                Console.log("Error!!", data)
            })
    }
})()
