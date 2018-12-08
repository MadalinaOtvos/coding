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

      <div ui-view align="center"></div>
        <script src="js/app/app.js"></script>
        <script src="js/app/services/loginService.js"></script>
        <script src="js/app/controllers/loginController.js"></script>
        <script src="js/app/controllers/homeController.js"></script>
        <script src="js/app/controllers/registerController.js"></script>
    </body>
</html>