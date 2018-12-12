var currentBikeId;
var rentedBikeId = 2;
var markerAvailableBikeButtonHtml = "<button type='button' class='btn btn-primary' onclick='rentBike()'>Rent Bike</button>";
var returnBikeButtonHtml = "<button type='button' class='btn btn-primary' onclick='returnBike()'>Return Bicycle</button>"
var markerBikeInstructions = "<ol><li>Click on 'Rent Bicycle'</li><li>Bicycle lock will unlock automatically</li><li>Adjust saddle height</li>&nbsp;;";

'use strict';

angular
    .module('bikeRental')
    .controller('HomeController', HomeController);

HomeController.$inject = ['$scope','$location', 'LoginService', 'UserService', 'HomeService', 'NotificationService'];

function HomeController($scope, $location, LoginService, UserService, HomeService, NotificationService) {
    var vm = this;

    vm.init = function () {

        var isLoggedIn = UserService.isUserLogedIn();
        // if (!isLoggedIn) {
        //     $location.url("/");
        //     NotificationService.Error("Please log in first!", true);
        // } else {
         HomeService.getBicycles().then(function (response) {
             vm.bicycles = response.data;
             console.log(vm.bicycles);
         }).catch(function (error) {
             console.log(error.data);
         });

        // UserService.getUserDetails().then(function (response) {
        //     vm.user = response.data;
        // }).catch(function (error) {
        //     console.log(error);
        // });

        initMap();
        //  }

    }

    function initMap(){
        var map = new L.Map('map').locate({setView: true, maxZoom: 8});
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
        map.attributionControl.setPrefix('');

        var markers = [
            [-0.1244324, 51.5006728, "<button type='button' class='btn btn-primary' onclick='rentBike()'>Rent Bike</button>", true],
            [-0.119623, 51.503308, "<button type='button' class='btn btn-primary' onclick='rentBike()'>Rent Bike</button>", false],
            [-0.1279688, 51.5077286, "<button type='button' class='btn btn-primary' onclick='rentBike()'>Rent Bike</button>", true]
        ];

        for (var i = 0; i < markers.length; i++) {

            var lon = markers[i][0];
            var lat = markers[i][1];
            var popupText = markers[i][2];
            var rented = markers[i][3];
            var statusIcon = new L.icon({
                iconUrl: rented === true ? 'https://cdn4.iconfinder.com/data/icons/miu/24/map-location-pin-map-marker-glyph-128.png'
                    : 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-128.png',
                iconSize: [25, 45],
            })
            var markerLocation = new L.LatLng(lat, lon);
            var marker = new L.Marker(markerLocation, {bikeId: i, isRented: rented, icon: statusIcon});
            map.addLayer(marker);
            marker.bindPopup(popupText);
            marker.on('click', onMarkerClick);
        }
    }

    var onMarkerClick = function (e) {
        currentBikeId = this.options.bikeId
    }
}


function rentBike() {
    alert("Hi current selected bike id: " + currentBikeId);
}

function returnBike() {
    alert("Hi you returned bike: " + currentBikeId);
}