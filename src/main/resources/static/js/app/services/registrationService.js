(function () {
    'use strict';
    angular
        .module('app',[])
        .factory('RegistrationService', RegistrationService);
        RegistrationService.$inject = ['$http','$q','API_URL'];

         function RegistrationService($http,$q, API_URL) {

            var service = {
                register: register
            };

            return service;

            function register(user) {
                console.log('Trying to register user...');
                var deferred = $q.defer();
                $http.post(API_URL + "/user/", user)
                    .then(
                        function (response) {
                            console.log("User successfully created!");
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while creating entry : '+ errResponse.data);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
        }
}());