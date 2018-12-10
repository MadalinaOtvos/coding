<!DOCTYPE html>

<html lang="en" ng-app="app">
    <head>
        <title>Bike Rental</title>
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/app.css" rel="stylesheet"/>
        <link data-require="leaflet@0.7.3" data-semver="0.7.3" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />
        <link rel="stylesheet" href="https://rawgit.com/Leaflet/Leaflet.label/master/dist/leaflet.label.css" />
    </head>
    <body>
    <script src="//code.jquery.com/jquery-2.0.3.min.js"></script>
    <script src="//code.angularjs.org/1.2.20/angular.js"></script>

    <script data-require="leaflet@0.7.3" data-semver="0.7.3" src="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
    <script src="https://rawgit.com/Leaflet/Leaflet.label/master/dist/leaflet.label.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-leaflet-directive/0.10.0/angular-leaflet-directive.min.js"></script>

    <script data-require="ui-router@*" data-semver="0.2.15" src="//rawgit.com/angular-ui/ui-router/0.2.15/release/angular-ui-router.js"></script>
    <script src="//code.angularjs.org/1.2.13/angular-cookies.js"></script>
    <script src="js/app/services/loginService.js"></script>
    <script src="js/app/services/registrationService.js"></script>
    <script src="js/app/services/homeService.js"></script>
    <script src="js/app/controllers/registerController.js"></script>
    <script src="js/app/controllers/loginController.js"></script>
    <script src="js/app/controllers/homeController.js"></script>
    <script src="js/app/app.js"></script>
    <div class="jumbotron">
        <div class="container">
            <div class="col-sm-8 col-sm-offset-2">
                <div ui-view align="center"></div>
            </div>
        </div>
    </div>
    </body>
</html>