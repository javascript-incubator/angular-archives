'use strict';

/**
 * @ngdoc service
 * @name ngRdpApp.GeneralCoordinates
 * @description
 * # GeneralCoordinates
 * Constant in the ngRdpApp.
 */
angular.module('ngRdpApp')
  .constant('GeneralCoordinates', {
    INDIA:{
      lat: 27.187902,
      lng: 77.488617,
      zoom: 4
    },
    WORLD:{
      lat: 0.0,
      lng: 0.0,
      zoom: 2
    }
  });
