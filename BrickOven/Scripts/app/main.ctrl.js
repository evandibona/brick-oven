angular
    .module('BrickOven')
    .controller('CarController', carController); 

carController.$inject = ['BrickFactory'] 

function carController(BrickFactory) {
    var vm = this
    vm.factory = BrickFactory 
}