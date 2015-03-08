(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('carApi', carApi)

    carApi.$inject = ['$http']

    function carApi($http) {
        var apiParts = {
            list: listProperty
        }
        return apiParts
        ///////////////

        function listProperty(prp, vm) {
            $http.get("/api/finder/" + prp)
            .then(function (d) {
                vm[prp] = d.data 
                console.log(vm[prp])
            })
        }
    }
})()
