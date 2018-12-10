'use strict';

    angular
        .module('app',['leaflet-directive'])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        var vm = this;

        vm.user = null;

            $scope.center = {
                lat: 46.119944,
                lng: 14.815333,
                zoom: 8
            };
            $scope.markers = {
                jesenice: {
                    lat: 46.4367,
                    lng: 14.0526,
                    riseOnHover: true,
                    label: {
                        message: 'Jesenice',
                        options: {
                            clickable: true,
                            noHide: true,
                            markerName: 'jesenice'
                        }
                    }
                },
                hrusica: {
                    lat: 46.4489,
                    lng: 14.0113,
                    riseOnHover: true,
                    label: {
                        message: 'Hrušica',
                        options: {
                            clickable: true,
                            noHide: true,
                            markerName: 'hrusica'
                        }
                    }
                },
                koroskaBela: {
                    lat: 46.4262,
                    lng: 14.0988,
                    riseOnHover: true,
                    label: {
                        message: 'Koroška Bela',
                        options: {
                            clickable: true,
                            noHide: true,
                            markerName: 'koroskaBela'
                        }
                    }
                },
                blejskaDobrava: {
                    lat: 46.4077,
                    lng: 14.0989,
                    riseOnHover: true,
                    label: {
                        message: 'Blejska Dobrava',
                        options: {
                            clickable: true,
                            noHide: true,
                            markerName: 'blejskaDobrava'
                        }
                    }
                }
            };

            $scope.selectedMarker = null;
            $scope.$watch('selectedMarker', function(newVal, oldVal) {
                if (oldVal !== null) {
                    $scope.markers[oldVal].zIndexOffset = 0;
                }
                if (newVal !== null) {
                    $scope.markers[newVal].zIndexOffset = 100;
                }
            });

            $scope.$on('leafletDirectiveMarker.click', function(event, args) {
                $scope.selectedMarker = args.modelName;
            })
            $scope.$on('leafletDirectiveLabel.click', function(event, args) {
                $scope.selectedMarker = args.leafletObject.options.markerName;
            })
    }