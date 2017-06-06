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
    vm.placeChanged = function() {
      vm.place = this.getPlace();
      // console.log('location', vm.place.geometry.location);
      vm.home = vm.map.getCenter();
      vm.shelterData = current.query({
          lat: vm.home.lat(),
          lng: vm.home.lng()
      });
      vm.map.setCenter(vm.place.geometry.location);


    };  // close placeChanged




   //  get map function
     NgMap.getMap().then(function(map ,evtMap) {
      vm.map = map;

    // lazy load function
      vm.googleMapsUrl = 'https://maps.google.com/maps/api/js';
      //  vm.pauseLoading=true;
      //  console.log("Starting a timer to wait for 2 seconds before the map will start loading");

      // lazyload timout
       $timeout(function() {
        //  console.debug("Showing the map. The google maps api should load now.");
         vm.pauseLoading=false;

         vm.home = vm.map.getCenter();
         vm.shelterData = current.query({
             lat: vm.home.lat(),
             lng: vm.home.lng()
         }); //close shelter data
          // console.log(vm.home.lat());
       }, 2000);  // close timeout function
    }); //close getMap function



        // info window function
          vm.showDetail = function (e, shelter) {
            vm.shelter = shelter;
            vm.map.showInfoWindow('foo-iw', shelter);
          };


    // event listner function  this function makes the app load markers on change location

      vm.centerChanged = function(event) {
        // vm.pauseLoading=true;
        // $timeout(function() {

          // vm.pauseLoading=false;

          vm.home = vm.map.getCenter();
          vm.shelterData = current.query({
              lat: vm.home.lat(),
              lng: vm.home.lng()
          }); //Close Shelter Data
        // }, 1500);  //close timeout
          };

          //
          // // set home function
          //     vm.setHome = function() {
          //       vm.pauseLoading=true;
          //           $timeout(function() {
          //             vm.pauseLoading=false;
          //             vm.home = vm.map.getCenter();
          //             vm.shelterData = current.query({
          //                 lat: vm.home.lat(),
          //                 lng: vm.home.lng()
          //             }); //Close Shelter Data
          //           }, 1500);  //close timeout
          //     };//close setHome function


  });   //close controller
