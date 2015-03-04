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
        vm.traits = [
            { mid: "make", view: false, name: "Make", val: "" },
            { mid: "model", view: false, name: "Model", val: "" },
            { mid: "seats", view: false, name: "Seats", val: "" },
            { mid: "year", view: false, name: "Year", val: "" },
            { mid: "body", view: false, name: "Body Type", val: "" },
            { mid: "fuel", view: false, name: "Fuel", val: "" },
        ]
        vm.cars = [
            { make: "Shiny", model: "Rocket", seats: "18", year: "1950", body: "Rocket Shaped", fuel: "Lots of It." },
            { make: "Buggy", model: "Smithfield Co.", seats: "2", year: "1750", body: "Horse shoe", fuel: "Horses." },
        ]
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
            vm.reset()
        }
    }
})()
