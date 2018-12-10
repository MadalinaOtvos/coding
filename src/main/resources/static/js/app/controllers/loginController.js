'use strict';

angular.module('app',[]).controller('LoginController', LoginController);
LoginController.$inject=['LoginService'];
 function LoginController(LoginService){

        var self = this;

        self.submit = submit;
        self.user = {};
        self.user.email = "";
        self.user.username = "";

        function submit() {
            LoginService.login(self.user)
                 .then(function (response) {
                     if (response.success && user.password === CryptoJS.AES.decrypt( response.data.password, ENCRYPTION_KEY).toString()) {
                         $location.path('/home');
                     } else {
                         MessageService.Error(response.message);
                     }
                 })

        }
    };