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
        // Generate Dropdown Lists //
        angular.forEach(vm.traits, function (e) {
            carApi.list(e.id, vm)
        })
        vm.cars = [ {"make": "No Cars Are Loaded", "engineFuel": "Pure Ovaltine"}]
        ///////////////////////////
        vm.loadCars = function (maxLength) {
            var apiCall = {}
            angular.forEach(vm.traits, function (e) {
                if ((e.val != undefined ) && ( e.val.length > 0 )) {
                    var sqlId = carApi.camel('stretch', e.id) 
                    apiCall[sqlId] = e.val
                }
            })
            apiCall["max"] = maxLength 
            carApi.cars(apiCall, vm)
        }
    }
})()
