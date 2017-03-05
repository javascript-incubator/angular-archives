'use strict';

/**
 * @ngdoc service
 * @name ngRdpApp.MapboxConfig
 * @description
 * # MapboxConfig
 * Constant in the ngRdpApp.
 */
angular.module('ngRdpApp')
  .constant('MapboxConfig', {
    ACCESSTOKEN: 'pk.eyJ1IjoibHVuYXN1bmthaXNlciIsImEiOiJjaWhkY3F2Z2YwYm55dmZrbDNxYTAzdnpiIn0.SoQ_JJGfH7--NwInAP6flA',
    WHEATPASTEMAPID: 'mapbox.wheatpaste',
    MAPSTYLE: {
      fillColor: '#2ABCF3',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.7
    },
    //GETMAPURL:()=>`http://api.tiles.mapbox.com/v4/${this.WHEATPASTEMAPID}/{z}/{x}/{y}.png?access_token=${this.ACCESSTOKEN}`
    GETMAPURL: () => `https://api.mapbox.com/styles/v1/lunasunkaiser/cinz40990000dd5lzqj3aurx9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVuYXN1bmthaXNlciIsImEiOiJjaWhkY3F2Z2YwYm55dmZrbDNxYTAzdnpiIn0.SoQ_JJGfH7--NwInAP6flA`
  });
