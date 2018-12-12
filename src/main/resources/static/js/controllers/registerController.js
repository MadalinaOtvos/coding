    'use strict';

    angular
        .module('bikeRental')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$rootScope','$location','RegistrationService','NotificationService'];
    function RegisterController($rootScope,$location,RegistrationService,NotificationService) {

        var self = this;

        self.submit = submit;
        self.user = {};
        self.user.email = "";
        self.user.username = "";

        function submit() {
            console.log('Submitting registration...');
            RegistrationService.register(self.user)
                .then(function(response) {
                $location.url("/");
                NotificationService.Success("Registration successful! Please log in!",true)
            }).catch(function(error){
               console.log("Error while registering user: " + error);
               NotificationService.Error("Error occurred while registering the user! Please try again!",false);
            });


        }
    }