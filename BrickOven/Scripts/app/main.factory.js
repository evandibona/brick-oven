(function () {
    angular
        .module('BrickOven')
        .factory('BrickFactory', brickFactory)

    function brickFactory(a) {
        // Returns columns filtered by other columns. 
        //      example: a list of every model for a given make. 
        if (a['years'] != undefined) {
            return a['years'] 
        }
        return  "Error"
    }
})()
