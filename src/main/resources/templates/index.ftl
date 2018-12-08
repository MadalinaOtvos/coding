<!DOCTYPE html>

<html lang="en" ng-app="app">
    <head>
        <title>Bike Rental</title>
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/app.css" rel="stylesheet"/>
    </head>
    <body>
    <script src="//code.jquery.com/jquery-2.0.3.min.js"></script>
    <script src="//code.angularjs.org/1.2.20/angular.js"></script>
    <script data-require="ui-router@*" data-semver="0.2.15" src="//rawgit.com/angular-ui/ui-router/0.2.15/release/angular-ui-router.js"></script>
    <script src="//code.angularjs.org/1.2.13/angular-cookies.js"></script>
    <div class="jumbotron">
        <div class="container">
            <div class="col-sm-8 col-sm-offset-2">
                <div align="center" ng-class="{ 'alert': flash, 'alert-success': flash.type === 'success', 'alert-danger': flash.type === 'error' }"  ng-bind="flash.message"></div>
                <div ui-view align="center"></div>
            </div>
        </div>
    </div>
    <script src="js/lib/aes.js"  type='text/javascript'></script>
    <script src="js/app/app.js"></script>
    <script src="js/app/services/loginService.js"></script>
    <script src="js/app/services/messageService.js"></script>
    <script src="js/app/services/registrationService.js"></script>
    <script src="js/app/controllers/loginController.js"></script>
    <script src="js/app/controllers/homeController.js"></script>
    <script src="js/app/controllers/registerController.js"></script>
    </body>
</html>