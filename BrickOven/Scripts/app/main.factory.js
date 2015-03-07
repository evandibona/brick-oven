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

        function listProperty(prp) {
            return $http.get("/api/finder/" + prp)
            .then(function (d) {
                console.log(d.data) 
                return d.data 
            })
        }
    }
})()
