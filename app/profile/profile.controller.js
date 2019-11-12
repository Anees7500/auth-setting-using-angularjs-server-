(function(){
    angular.module('app').controller('ProfileController', profileController)

     function profileController(){
var vm = this;
vm.profile = JSON.stringify(localStorage.getItem('profile'));
     }
})();