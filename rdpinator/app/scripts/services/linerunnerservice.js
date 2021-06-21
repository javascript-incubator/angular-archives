'use strict';

/**
 * @ngdoc service
 * @name ngRdpApp.LineRunnerService
 * @description
 * # LineRunnerService
 * Service in the ngRdpApp.
 */
angular.module('ngRdpApp')
  .service('LineRunnerService', ['$http', 'RemoteResource', function ($http, RemoteResource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getGeoJson = function (url) {
      return $http.get(url);
    }
  }]);
