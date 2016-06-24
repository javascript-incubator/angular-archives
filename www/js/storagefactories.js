angular.module('andheri.factories', [])

.factory ('CurrentMovieStorageService', function ($localStorage) {

  $localStorage = $localStorage.$default({
    currentMovies: []
  });

  var _removeAll = function () {
    $localStorage.currentMovies = [];
  };

  var _getAll = function () {
    return $localStorage.currentMovies;
  };

  var _add = function (currentMovie) {
    $localStorage.currentMovies.push(currentMovie);
  }

  var _remove = function (currentMovie) {
    $localStorage.currentMovies.splice($localStorage.currentMovies.indexOf(currentMovie), 1);
  }

  return {
    getAll: _getAll,
    add: _add,
    remove: _remove,
    removeAll:_removeAll
  };
});
