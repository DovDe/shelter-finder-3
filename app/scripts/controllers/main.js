'use strict';

/**
 * @ngdoc function
 * @name shelterFinder3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shelterFinder3App
 */
angular.module('shelterFinder3App')
  .controller('MainCtrl', function ($scope, current, NgMap) {
    var vm = this;

    // vm.types = "['establishment']";
    vm.placeChanged = function() {
      vm.place = this.getPlace();
      console.log('location', vm.place.geometry.location);
      vm.map.setCenter(vm.place.geometry.location);
    }
    NgMap.getMap().then(function(map) {
      vm.map = map;

      vm.home = new google.maps.LatLng(41.850033, -87.6500523);

      vm.setHome = function() {
      vm.home = vm.map.getCenter();

  }
     vm.shelters = [];
    });


    
  });
