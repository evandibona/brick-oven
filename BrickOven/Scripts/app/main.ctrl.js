(function () {
    'use strict'
    angular
        .module('BrickOven')
        .controller('CarController', carController);

    function carController($http, carApi) {
        var vm = this
        vm.traits = [
            { id: "make", name: "Make" },
            { id: "modelName", name: "Model" },
            { id: "seats", name: "Seats" },
            { id: "modelYear", name: "Year" },
            { id: "bodyStyle", name: "Body Type" },
            { id: "engineFuel", name: "Fuel" },
        ]
        angular.forEach(vm.traits, function (e) {
            carApi.list(e.id, vm)
        })
        /*
        vm.filter = {}
        vm.makeFilter = function (traits) {
            var f = {}
            angular.forEach(traits, function (trait) {
                f[trait.sql] = trait.val
            })
            return f
        }
        vm.submitFilter = function () {
            vm.filter = vm.makeFilter(vm.traits)
        }
        */


    }
})()
