'use strict';

/**
 * @ngdoc function
 * @name ngRdpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngRdpApp
 */
angular.module('ngRdpApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.goToMap = function(){
      $location.path('/map');
    }
  });
