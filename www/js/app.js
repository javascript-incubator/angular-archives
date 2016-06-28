// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('andheri', ['ionic', 'ngStorage','andheri.factories','andheri.controllers','youtube-embed'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.upcoming', {
    url: '/upcoming',
    views: {
      'menuContent': {
        templateUrl: 'templates/upcoming.html',
        controller:'UpComingMovieCtrl'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller:'SearchMovieCtrl'
      }
    }
  })
  .state('app.analytics', {
    url: '/analytics',
    views: {
      'menuContent': {
        templateUrl: 'templates/analytics.html',
        controller:'AnalyticsMovieCtrl'
      }
    }
  })
  .state('app.releasing', {
    url: '/releasing',
    views: {
      'menuContent': {
        templateUrl: 'templates/releasing.html',
        controller:'ReleasingMovieCtrl'
      }
    }
  })
  .state('app.released', {
    url: '/released',
    views: {
      'menuContent': {
        templateUrl: 'templates/released.html',
        controller:'ReleasedMovieCtrl'
      }
    }
  })
  .state('app.details', {
    url: '/details',
    views: {
      'menuContent': {
        templateUrl: 'templates/details.html',
        controller:'DetailedMovieCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/upcoming');
});
