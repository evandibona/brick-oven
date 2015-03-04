(function () {
    'use strict'

    function ForEach(ary, action) {
        for (var i in ary) {
            action(ary[i])
        }
    }

    angular
        .module('BrickOven')
        .controller('CarController', carController);

    function carController($http, BrickFactory) {
        var vm = this
        vm.info = { Car: "Could go here" }
        vm.years = ["Years couldn't load"]
        vm.makes = ["Makes couldn't load"]
        vm.traits = [
            ["make", false, "Make", ""],
            ["model", false, "Model", ""],
            ["seats", false, "Seats", ""],
            ["year", false, "Year", ""],
            ["body", false, "Body Type", ""],
            ["fuel", false, "Fuel", ""],
        ]
        vm.cars = [
            { make: "Shiny", model: "Rocket", seats: "18", year: "1950", body: "Rocket Shaped", fuel: "Lots of It." },
            { make: "Buggy", model: "Smithfield Co.", seats: "2", year: "1750", body: "Horse shoe", fuel: "Horses." },
        ]
        vm.filter = []
        vm.makeFilter = function (traits) {
            var filter = []
            ForEach(traits, function (e) {
                if (e[3].length > 0) {
                    var a = e[0]
                    filter += { a: e[3] }
                }
            })
            return filter
        }
        vm.clearTraits = function() {
            for (var i in vm.traits) {
                vm.traits[i][1] = false
            }
        }
        vm.select = function (i) {
            vm.clearTraits()
            vm.traits[i][1] = true
        }
    }
})()
