(function () {
    'use strict';

    angular.module('bikeRental').service('LoginService',LoginService);
    function LoginService(){
        var login = this;

        login.submit = function(){
            console.log("akarmi");
        }
    }
}());