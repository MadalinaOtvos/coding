(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['LoginService', '$rootScope'];
    function RegisterController(LoginService, $rootScope) {

        var self = this;

        self.submit = submit;
        self.user = {};
        self.user.email = "";
        self.user.username = "";

        function submit() {

            console.log('Submitting registration...');

        }
    }
})();