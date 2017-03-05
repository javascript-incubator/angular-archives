'use strict';

/**
 * @ngdoc service
 * @name ngRdpApp.GeojsonResource
 * @description
 * # GeojsonResource
 * Constant in the ngRdpApp.
 */
angular.module('ngRdpApp')
  .constant('RemoteResource', {
    GeoJsonResource:countryId=>`https://raw.githubusercontent.com/johan/world.geo.json/master/countries/${countryId}.geo.json`,
    LineRunner:geoUrl=>`https://rdplinerunner.herokuapp.com/geoJsonUrl/${encodeURIComponent(geoUrl)}/tolerance/1`
  });
