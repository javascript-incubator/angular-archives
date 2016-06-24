angular.module('andheri.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('UpComingMovieCtrl', function($scope,$http,CurrentMovieStorageService,$state) {
  $scope.doRefresh = function() {
    $http.get('https://api.cinemalytics.com/v1/movie/upcoming?auth_token=5E675BB542543A7AC4213760F80E3296')
     .success(function(result) {
       $scope.upcomingMovies = result;
       console.log(result);
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
  $scope.setCurrentMovie = function(upcomingMovie){
    CurrentMovieStorageService.removeAll();
    CurrentMovieStorageService.add(upcomingMovie);
    $state.go('app.details');
  };
  $scope.doRefresh();
})

.controller('ReleasingMovieCtrl', function($scope,$http,CurrentMovieStorageService,$state) {
  $scope.doRefresh = function() {
    $http.get('https://api.cinemalytics.com/v1/movie/nextchange?auth_token=5E675BB542543A7AC4213760F80E3296')
     .success(function(result) {
       $scope.releasings = result;
       console.log(result);
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
  $scope.setCurrentMovie = function(upcomingMovie){
    CurrentMovieStorageService.removeAll();
    CurrentMovieStorageService.add(upcomingMovie);
    $state.go('app.details');
  };
  $scope.doRefresh();
})

.controller('ReleasedMovieCtrl', function($scope,$http,CurrentMovieStorageService,$state) {
  $scope.doRefresh = function() {
    $http.get('https://api.cinemalytics.com/v1/movie/releasedthisweek?auth_token=5E675BB542543A7AC4213760F80E3296')
     .success(function(result) {
       $scope.releases = result;
       console.log(result);
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
  $scope.setCurrentMovie = function(upcomingMovie){
    CurrentMovieStorageService.removeAll();
    CurrentMovieStorageService.add(upcomingMovie);
    $state.go('app.details');
  };
  $scope.doRefresh();
})

.controller('AnalyticsMovieCtrl', function($scope,$http,CurrentMovieStorageService,$state) {
  $scope.getMovies = function(whatTen){
    $scope.tab = whatTen;
    $http.get('https://api.cinemalytics.com/v1/analytics/'+whatTen+'/?auth_token=5E675BB542543A7AC4213760F80E3296')
     .success(function(result) {
       $scope.results = result;
       console.log(result);
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
     });
  }
   $scope.setCurrentMovie = function(upcomingMovie){
     CurrentMovieStorageService.removeAll();
     CurrentMovieStorageService.add(upcomingMovie);
     $state.go('app.details');
   }
})

.controller('DetailedMovieCtrl', function($scope,$http,CurrentMovieStorageService) {
  $scope.currentMovieDetails = CurrentMovieStorageService.getAll()[0];
})

.controller('SearchMovieCtrl', function($scope,$http,CurrentMovieStorageService,$state) {
  $scope.searchMovie = function(movieText){
    $http.get('https://api.cinemalytics.com/v1/movie/title/?value='+movieText+'&auth_token=5E675BB542543A7AC4213760F80E3296')
     .success(function(result) {
       $scope.results = result;
       console.log(result);
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
     });
  }
   $scope.setCurrentMovie = function(upcomingMovie){
     CurrentMovieStorageService.removeAll();
     CurrentMovieStorageService.add(upcomingMovie);
     $state.go('app.details');
   }
});
