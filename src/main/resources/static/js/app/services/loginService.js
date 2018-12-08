(function () {
    'use strict';

    angular
        .module('app')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout'];
    function LoginService($http, $cookieStore, $rootScope, $timeout) {
        var service = {};
        return service;
    }
})();