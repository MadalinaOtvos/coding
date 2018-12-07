var app = angular.module('app',['ui.router','ngStorage']);
app.constant('urls', {
    API_SERVICE: 'http://localhost:8080/BikeRental/api/user/'
});
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/login',
                controller:'userController',
                controllerAs:'vm'
            });
        $urlRouterProvider.otherwise('/');
    }]);

