'use strict';

/**
 * @ngdoc function
 * @name ngRdpApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the ngRdpApp
 */
angular.module('ngRdpApp')
  .controller('MapCtrl', ['$scope', '$http', 'RemoteResource', 'LineRunnerService', 'GeneralCoordinates', 'MapboxConfig',
  function ($scope, $http, RemoteResource, LineRunnerService, GeneralCoordinates, MapboxConfig) {
      const v = this;
      v.geoUrl = RemoteResource.GeoJsonResource('IND');
      v.map = {};
      angular.extend(v.map, {
        center: GeneralCoordinates.WORLD,
        layers: {
          baselayers: {
            mapbox: {
              name: 'About India',
              url: MapboxConfig.GETMAPURL(),
              type: 'xyz',
              layerOptions: {
                showOnSelector: false,
                apikey: MapboxConfig.ACCESSTOKEN
              }
            }
          }
        }
      });


      v.loadElaboratedVectorFromGeoJsonUrl = function (url) {
        loadVectorFromGeoJson(url);
      };

      v.loadElaboratedVectorFromGeoJsonUrl(v.geoUrl);

      v.loadSimplifiedVectorFromGeoJsonUrl = function (url) {
        let geoUrl = RemoteResource.LineRunner(url);
        loadVectorFromGeoJson(geoUrl);
      };

      function loadVectorFromGeoJson(url) {
        v.isOrignal = !v.isOrignal;
        v.isControlDisabled = true;
        LineRunnerService.getGeoJson(url).then(data => renderMap(data)).catch(err => showError(err));
      };

      function showError() {
        v.error = true;
      };

      function renderMap(data) {
        v.isControlDisabled = false;
        v.error = false;
        angular.extend(v.map, {
          geojson: {
            data: data.data,
            style: MapboxConfig.MAPSTYLE
          }
        });
      }

      v.iconClasses = function () {
        return { 'fa-frown-o': v.error, 'is-active': !v.isOrignal, 'animated infinite tada': v.isControlDisabled };
      }

}]);
