(function () {
    'use strict'
    angular
        .module('BrickOven')
        .controller('CarController', carController);

    function carController($http, BrickFactory) {
        var vm = this
        vm.info = { Car: "Could go here" } 
        vm.years = ["Years couldn't load"]
        vm.makes = ["Makes couldn't load"]
        /*
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
            */
    }
})()
