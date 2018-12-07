'use strict';

angular.module('app').controller('userController',
    ['userService', '$scope', function (userService, $scope) {

        var self = this;

        self.submit = submit;
        self.user = {};
        self.user.email = "";
        self.user.surname = "";

        function submit() {

            console.log('Submitting');

        }
    }]);