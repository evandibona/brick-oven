(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('carApi', carApi)

    carApi.$inject = ['$http']

    function carApi($http) {
        return {
            list: function (prp) {
                return $http.get("/api/finder/" + prp)
                    .then(function (a) {
                        return a['data']
                    })
            }
        }
    }
})()
