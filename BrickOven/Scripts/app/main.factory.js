(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('carApi', carApi)

    carApi.$inject = ['$http']

    function carApi($http) {
        var apiParts = {
            list: listProperty,
            cars: getCarList,
        }
        return apiParts
        ///////////////

        function listProperty(t, vm) {
            $http.get("/api/finder/" + t.lid)
            .then(function (d) {
                vm[t.id] = d.data
            })
        }
        function getCarList(params, vm) {
            $http.post("/api/finder/", params)
            .then(function (d) {
                vm.cars = d.data
                console.log(d.data)
            })
        }
    }
})()
