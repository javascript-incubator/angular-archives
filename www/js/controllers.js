angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Samastipur', id: 1 }
  ];
  $scope.labels = ["16th Jan", "17th Jan", "18th Jan", "19th Jan", "20th Jan"];
  $scope.series = ['Max Temp', 'Min Temp','Rainfall in cms','Max Humidity in %','Min Humidity in %','Wind Speed in kmph'];
  $scope.data = [
    [27, 27, 25, 25, 19],
    [13, 13, 11, 11, 13],
    [0, 0, 0, 0, 8],
    [58, 56, 63, 49, 84],
    [32, 31, 30, 26, 52],
    [7, 6, 4, 11, 9]
  ];
  $scope.labelstemp = ["16th Jan", "17th Jan", "18th Jan", "19th Jan", "20th Jan"];
  $scope.seriestemp = ['Max Temp', 'Min Temp'];
  $scope.datatemp = [
    [27, 27, 25, 25, 19],
    [13, 13, 11, 11, 13]
  ];
  $scope.labelsrain = ["16th Jan", "17th Jan", "18th Jan", "19th Jan", "20th Jan"];
  $scope.seriesrain = ['Rainfall in cms'];
  $scope.datarain = [
    [0, 0, 0, 0, 8]
  ];
  $scope.serieshumid = ['Max Humidity in %','Min Humidity in %'];
  $scope.datahumid = [
    [58, 56, 63, 49, 84],
    [32, 31, 30, 26, 52]
  ];
  $scope.serieswind = ['Wind Speed in kmph','Wind Direction'];
  $scope.datawind = [
    [7, 6, 4, 11, 9],
    [10, 10, 10, 10, 20]
  ];
  $scope.districts = [

  ];
  $scope.crops = [
    { title: 'Mustard', type:'Flowering', img:'img/mustard.jpg', ico:'img/mustardico.jpg', desc:'Regular monitoring is advised against infestation of white rust in mustard crop.  If infestation is found high, than spraying of Chlorothalonil 75 WP @1 gram/ liter of water is advised in clear days.' },
    { title: 'Wheat', type:'CRI Stage', img:'img/wheat.jpg', ico:'img/wheatico.jpg', desc:'Farmers are advised to remove weeds from wheat crop, which is in 30-35 days stage. For this purpose, spraying of solution of 33 gm Sulfosulfuron and 20 Metsulfuron in 500 liter water per hectare is advised.  2nd irrigation is suggested when the crop would be in 40-45 days stage.' },
    { title: 'Pea', type:'Flowering', img:'img/pea.jpg', ico:'img/peaico.jpg', desc:'Spraying of 2 % urea is advised for proper growth of pods in pea crop. Regular monitoring is advised against infestation of powdery mildew disease in pea crop. Farmers are advised to spray Karathane @ 1 ml per litre of water or Sulfex @ 3gm per litre of water, if infestation is found high.'},
    { title: 'Gram', type:'Flowering', img:'img/gram.jpg', ico:'img/gramico.jpg', desc:'Regular monitoring is advised for infestation of pod borer in the gram crop. If infestation occurs, installation of Pheromone trap @ 3-4 traps per acre is advised when 15-20 % flowering is observed. “T” shaped bird perches in and around crop field are to be installed for controlling insect population.' },
    { title: 'Rabi Onion', type:'Transplanting', img:'img/onion.jpg', ico:'img/onionico.jpg', desc:'Transplanting of 45-50 days old onion seedlings is advised. Transplanting should be done in small beds with a size of 3x2cm or 5x2cm and with a spacing of 15 cm for line to line and 10cm for plant to plant. Deep transplanting should be avoided. Generally, onion crop requires light and frequent irrigation at short intervals.' },
    { title: 'Potato', type:'Vegetative', img:'img/potato.jpg', ico:'img/potatoico.jpg', desc:'Monitoring is advised for infestation of fungi borne disease blight in potato/tomato. Spraying of Indofil M-45@2.5gm/L of water in potato/tomato for control of blight. Spraying is advised along the direction of air on clear days.' },
    { title: 'Cauliflower/Cabbage', type:'-', img:'img/cauliflower.jpg', ico:'img/cauliflowerico.jpg', desc:'Monitoring is advised for infestation of leaf feeders in Cabbage & Cauliflower crop, if insect population is above ETL (Economic Threshold Level) then spraying of  Dimethoate 30 EC@1ml/L or  Spinosad @1 ml / 3 liter of water is advised. ' }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
