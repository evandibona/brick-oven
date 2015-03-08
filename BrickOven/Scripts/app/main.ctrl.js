(function () {
    'use strict'
    angular
        .module('BrickOven')
        .controller('CarController', carController);

    function carController($http, carApi) {
        var vm = this
        vm.traits = [
            { sql: "make", name: "Make" },
            { sql: "model_name", name: "Model" },
            { sql: "seats", name: "Seats" },
            { sql: "model_year", name: "Year" },
            { sql: "body_style", name: "Body Type" },
            { sql: "engine_fuel", name: "Fuel" },
        ]
        angular.forEach(vm.traits, function (e) {
            carApi.list(e.sql, vm)
        })
        console.log(vm.make)
        console.log(vm.model_name)
        console.log(vm.make)
        console.log(vm.make)
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
            function capitalize(str) {
                return str[0].toUpperCase() + str.slice(1)
            }
        }


    }
})()
