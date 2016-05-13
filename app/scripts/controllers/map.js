'use strict';

/**
* @ngdoc function
* @name ngRdpApp.controller:MapCtrl
* @description
* # MapCtrl
* Controller of the ngRdpApp
*/
angular.module('ngRdpApp')
.controller('MapCtrl', function ($scope,$http) {
  var callingFunction;
  $scope.geoUrl = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries/IND.geo.json';
  $scope.mapStatus = 'panel-default';
  angular.extend($scope, {
    defaults: {
    },
    geojson : null
  });
  $scope.loadElaboratedVectorFromCountryCode = function(countryCode){
    callingFunction = 'ccode';
    $scope.geoUrl = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries/'+countryCode.toUpperCase()+'.geo.json';
    $scope.loadVectorFromGeoJson($scope.geoUrl,callingFunction);
  };
  $scope.loadSimplifiedVectorFromCountryCode = function(countryCode){
    callingFunction = 'simplify';
    $scope.geoUrl = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries/'+countryCode.toUpperCase()+'.geo.json';
    $scope.rdpUrl = 'https://rdplinerunner.herokuapp.com/geoJsonUrl/'+encodeURIComponent($scope.geoUrl)+'/tolerance/1';
    $scope.loadVectorFromGeoJson($scope.rdpUrl,callingFunction);
  };
  $scope.loadElaboratedVectorFromGeoJsonUrl = function(url){
    callingFunction = 'url';
    $scope.loadVectorFromGeoJson(url,callingFunction);
  };
  $scope.loadSimplifiedVectorFromGeoJsonUrl = function(url){
    callingFunction = 'simplify';
    $scope.rdpUrl = 'https://rdplinerunner.herokuapp.com/geoJsonUrl/'+encodeURIComponent(url)+'/tolerance/1';
    $scope.loadVectorFromGeoJson($scope.rdpUrl,callingFunction);
  };
  $scope.loadVectorFromGeoJson = function(url,cf){
    $http.get(url).success(function(data, status) {
      if(status===200&&cf==='url'){
        $scope.mapStatus = 'panel-primary';
      }
      else if(status===200&&cf==='ccode'){
        $scope.mapStatus = 'panel-success';
      }
      else if(status===200&&cf==='simplify'){
        $scope.mapStatus = 'panel-info';
      }
      else {
        $scope.mapStatus = 'panel-danger';
      }
      angular.extend($scope, {
        geojson: {
          data: data,
          style: {
            fillColor: 'green',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
          }
        }
      });
    });
  };
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
