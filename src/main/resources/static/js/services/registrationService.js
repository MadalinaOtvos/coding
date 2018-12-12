(function () {
    'use strict';
    angular
        .module('bikeRental')
        .service('RegistrationService', RegistrationService);
    RegistrationService.$inject = ['$http', '$q', 'API_URL'];

    function RegistrationService($http, $q, API_URL) {

        var service = {
           register: register,
           unregister: unregister
        };

        return service;

        function register(user) {
            console.log('Trying to register user ' + user);
            var deferred = $q.defer();
            $http.post(API_URL + "/users/register", user)
                .then(
                    function (response) {
                        console.log("User successfully created!");
                        deferred.resolve(response);
                    },
                    function (errResponse) {
                        console.error('Error while creating entry : ' + user.email + "\n Details: " + errResponse.data);
                        deferred.reject(errResponse);
                    }
                );
            return deferred.promise;
        }

        function unregister(user) {
            console.log('Trying to deregister user ' + user);
            var deferred = $q.defer();
            $http.delete(API_URL + "/users/" + user.id)
                .then(
                    function (response) {
                        console.log("User unregistered successfully!");
                        deferred.resolve(response);
                    },
                    function (errResponse) {
                        console.error('Error while creating entry : ' + user.email + "\n Details: " + errResponse.data);
                        deferred.reject(errResponse);
                    }
                );
            return deferred.promise;
        }
    }
}());