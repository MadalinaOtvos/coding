'use strict';

angular.module('bikeRental').controller('LoginController', LoginController);
LoginController.$inject = ['$location', '$http', 'LoginService', 'NotificationService'];

function LoginController($location, $http, LoginService, NotificationService) {

    var vm = {
        submit: submit,
        logout: logout
    }
    return vm;

    vm.user = {};
    vm.user.email = "";
    vm.user.username = "";

    function submit() {
        console.log('Submitting user log in: ' + vm.user.email);
        LoginService.login(vm.user).then(function (response) {
                $location.url("/home");
            }).catch(function (error) {
            console.log("Error while login in user: " + vm.user.email + "\n Details: " + error.status + "\n" + error.data);

            if (error.status == 420) {
                NotificationService.Error("Couldn't log in, wrong username or password! Please try again!", false);
            } else {
                NotificationService.Error("Couldn't log in, something went wrong on server side! Please try again!", false);
            }
        });
    }

    function logout() {
        console.log('Submitting user log out...');
        LoginService.logout(self.user)
            .then(function (response) {
                $http.defaults.headers.common.Authorization = "";
                $location.url("/");
            }).catch(function (error) {
            console.log("Error while login out user: " + vm.user.email + "\n Details: " + error);
            NotificationService.Error("Error occurred while logging out! Please try again!", false);
        });

    }
}