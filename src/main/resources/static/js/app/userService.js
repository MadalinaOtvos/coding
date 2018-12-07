'use strict';

angular.module('app').factory('userService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
            var factory = {
                login: login,
                register: register
            };

            return factory;

            function login(email, password) {
                console.log('Trying to log in...');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('User logged in.');
                            $localStorage.user = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while trying to log in!');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function register(user) {
                console.log('Trying to create user...');
                var deferred = $q.defer();
                $http.post(urls.API_SERVICE, user)
                    .then(
                        function (response) {
                            console.log('User is registered!');
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while registering user : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
        }
    ]);
