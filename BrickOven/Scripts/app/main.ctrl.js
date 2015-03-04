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
            ["make", false, "Make",     ""], 
            ["model", false, "Model",   ""], 
            ["seats", false, "Seats",   ""], 
            ["year", false, "Year",     ""], 
            ["body", false, "Body Type",""], 
            ["fuel", false, "Fuel",     ""], 
        ]
        vm.cars = [
            { make: "Shiny", model: "Rocket", seats: "18", year: "1950", body: "Rocket Shaped", fuel: "Lots of It." },
            { make: "Buggy", model: "Smithfield Co.", seats: "2", year: "1750", body: "Horse shoe", fuel: "Horses." },
        ]
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
        vm.select = function (i) {
            function fillTraits(a, f) {
                for (var i in a) {
                    a[i][1] = f
                }
            }

            fillTraits(vm.traits, false)
            vm.traits[i][1] = true
        }
    }
})()
