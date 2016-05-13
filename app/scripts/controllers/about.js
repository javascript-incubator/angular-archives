'use strict';

/**
 * @ngdoc function
 * @name ngRdpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngRdpApp
 */
angular.module('ngRdpApp')
  .controller('AboutCtrl', function ($scope) {
    angular.extend($scope, {
               center: {
                   lat: 27.187902,
                   lng: 77.488617,
                   zoom: 4
               },
               layers: {
                   baselayers: {
                       mapbox: {
                           name: 'Mapbox Light',
                           url: 'http://api.tiles.mapbox.com/v4/mapbox.wheatpaste/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibHVuYXN1bmthaXNlciIsImEiOiJjaWhkY3F2Z2YwYm55dmZrbDNxYTAzdnpiIn0.SoQ_JJGfH7--NwInAP6flA',
                           type: 'xyz',
                           layerOptions: {
                              showOnSelector: false,
                               apikey: 'pk.eyJ1IjoibHVuYXN1bmthaXNlciIsImEiOiJjaWhkY3F2Z2YwYm55dmZrbDNxYTAzdnpiIn0.SoQ_JJGfH7--NwInAP6flA',
                               mapid: 'mapbox.wheatpaste'
                           }
                       }
                   }
               }
           });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
