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
        for (var i = 0; i < vm.traits.length; i++) {
            var e = vm.traits[i]
            e['lid'] = camel('stretch', e.id)
        }
        // Generate Dropdown Lists //
        angular.forEach(vm.traits, function (e) {
            carApi.list(e, vm)
        })
        vm.cars = [{ "make": "No Cars Are Loaded", "engineFuel": "Pure Ovaltine" }]
        ///////////////////////////
        vm.loadCars = function (maxLength) {
            var apiCall = {}
            angular.forEach(vm.traits, function (e) {
                if ((e.val != undefined) && (e.val.length > 0)) {
                    var sqlId = camel('stretch', e.id)
                    apiCall[sqlId] = e.val
                }
            })
            apiCall["max"] = maxLength
            carApi.cars(apiCall, vm)
        }
    }
    ////////////////////// REference Functions ////////////
    function camel(action, str) {
        var a = action.toLowerCase()
        if (a == 'squish') {
            var d = str.split('_')
            var o = ""
            // factor into a foreach
            for (var i in d) {
                var e = d[i].toLowerCase()
                if (i != 0) {
                    o += capitalize(e)
                }
                if (i == 0) {
                    o += e
                }
            }
            return o
        }
        if (a == 'stretch') {
            var ary = str.split(/(?=[A-Z])/)
            for (var i in ary) {
                ary[i] = ary[i].toLowerCase()
            }
            return ary.join("_")
        }
        return "Incorrect action was used."
        //////////////////////
        function capitalize(str) {
            return str[0].toUpperCase() + str.slice(1)
        }
    }
})()
