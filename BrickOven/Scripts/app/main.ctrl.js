(function () {
    'use strict'
    angular
        .module('BrickOven')
        .controller('CarController', carController);

    function carController($http, carApi) {
        var vm = this
        vm.years = carApi.list("years") 
        vm.makes = carApi.list("makes") 
        vm.traits = [
            { mid: "make", view: false, name: "Make", val: "" },
            { mid: "model", view: false, name: "Model", val: "" },
            { mid: "seats", view: false, name: "Seats", val: "" },
            { mid: "year", view: false, name: "Year", val: "" },
            { mid: "body", view: false, name: "Body Type", val: "" },
            { mid: "fuel", view: false, name: "Fuel", val: "" },
        ] // simplify this 
        vm.filter = {}
        vm.makeFilter = function (traits) {
            var f = {}
            angular.forEach(traits, function (trait) {
                if (trait.val.length > 0) {
                    f[trait.mid] = trait.val
                }
            })
            return f
        }
        vm.fillTraits = function (prop, def) {
            angular.forEach(vm.traits, function (t) {
                t[prop] = def
            })
        }
        vm.reset = function () {
            vm.fillTraits('view', false)
            vm.fillTraits('val', '')
        }
        vm.select = function (a) {
            vm.fillTraits("view", false)
            a.view = true
        }
        vm.submitFilter = function () {
            vm.filter = vm.makeFilter(vm.traits) 
        }
    }
})()
