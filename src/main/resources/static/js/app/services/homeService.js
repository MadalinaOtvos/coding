(function () {
    'use strict';
    angular
        .module('app',[])
        .factory('HomeService', ['$http','$q','API_URL',
            function ($http,$q, API_URL) {

                var factory = {
                    getBicycles: getBicycles
                };

                return factory;

                function getBicycles() {
                    console.log('Trying to retrieve bicycles...');
                    var deferred = $q.defer();
                    $http({
                        url:API_URL.concat("/bikes/"),
                        method: "GET"
                        }).then(
                        function (response) {
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.log('Error while retrieving bikes!');
                            deferred.reject(errResponse);
                        }
                    );
                    return deferred.promise;
                }
            }]);
}());