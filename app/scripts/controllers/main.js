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
      vm.shelterData = current.apiCall({
          lat: vm.home.lat(),
          lng: vm.home.lng()
      });

      vm.map.setCenter(vm.place.geometry.location);
    }

    NgMap.getMap().then(function(map) {
      vm.map = map;


      vm.setHome = function() {
      vm.home = vm.map.getCenter();
      vm.shelterData = current.apiCall({
          lat: vm.home.lat(),
          lng: vm.home.lng()
      });

  }
});  //close setHome function



  });   //close controller
