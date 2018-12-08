(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['LoginService', '$rootScope'];
    function HomeController(LoginService, $rootScope) {
        var vm = this;

        vm.user = null;
        loadCurrentUser();
        function loadCurrentUser() {

        }
    }

})();