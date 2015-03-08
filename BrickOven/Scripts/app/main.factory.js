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
            var sql = camel('stretch', prp )
            $http.get("/api/finder/" + sql)
            .then(function (d) {
                vm[prp] = d.data 
            })
        }

        /////////
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
            //////////////////////
            function capitalize(str) {
                return str[0].toUpperCase() + str.slice(1)
            }
        }
    }
})()
