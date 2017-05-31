'use strict';

/**
 * @ngdoc function
 * @name shelterFinder3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shelterFinder3App
 */
angular.module('shelterFinder3App')
  .controller('MainCtrl', function ($timeout, $scope, current, NgMap) {
    var vm = this;

    // places changed function
    // vm.types = "['establishment']";
    vm.placeChanged = function() {
      vm.place = this.getPlace();
      console.log('location', vm.place.geometry.location);
      vm.home = vm.map.getCenter();
      vm.shelterData = current.query({
          lat: vm.home.lat(),
          lng: vm.home.lng()
      });
      vm.map.setCenter(vm.place.geometry.location);
    };  // close placeChanged


   //  get map function
     NgMap.getMap().then(function(map) {
      vm.map = map;

    // lazy load function
      vm.googleMapsUrl = 'https://maps.google.com/maps/api/js';
       vm.pauseLoading=true;
       console.log("Starting a timer to wait for 2 seconds before the map will start loading");

       $timeout(function() {
         console.debug("Showing the map. The google maps api should load now.");
         vm.pauseLoading=false;

         vm.home = vm.map.getCenter();
         vm.shelterData = current.query({
             lat: vm.home.lat(),
             lng: vm.home.lng()
         });
          console.log(vm.home.lat());
       }, 1000);

        // set home function

      vm.setHome = function() {
        $timeout(function() {
          console.debug("Showing the map. The google maps api should load now.");
          vm.pauseLoading=false;

          vm.home = vm.map.getCenter();
          vm.shelterData = current.query({
              lat: vm.home.lat(),
              lng: vm.home.lng()
          });
           console.log(vm.home.lat());
           console.log(vm.home.lng());
           console.log(current.query());
        }, 1000);  //close timeout

  };//close setHome function



}); //close getMap function

vm.showDetail = function (shelter) {
  vm.shelter = shelter;
  vm.map.showInfoWindow('foo-iw', shelter.id);
};


  });   //close controller
