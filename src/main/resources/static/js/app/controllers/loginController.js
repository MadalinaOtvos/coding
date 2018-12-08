'use strict';

angular.module('app').controller('LoginController',
    ['LoginService', '$scope', function (LoginService, $scope) {

        var self = this;

        self.submit = submit;
        self.user = {};
        self.user.email = "";
        self.user.username = "";

        function submit() {

            console.log('Submitting');

        }
    }]);