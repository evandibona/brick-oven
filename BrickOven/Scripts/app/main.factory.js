(function () {
    'use strict'

    angular
        .module('BrickOven')
        .factory('carApi', carApi)

    carApi.$inject = ['$http']

    function carApi($http) {
        function req(prp) {
            return $http.get("/api/finder/" + prp)
               .success(function (data) {
                   return data
               })
                .then(function (a) {
                    return a['data'] 
                })
        }
        return {
            list: req
        }
    }
})()
