'use strict';

/**
 * @ngdoc service
 * @name shelterFinder3App.current
 * @description
 * # current
 * Factory in the shelterFinder3App.
 */
angular.module('shelterFinder3App')
  .factory('current', function ($resource) {
    // Service logic
    // ...



    // Public API here
     return $resource('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=?&radius=500&keyword=homeless+shelter&key=AIzaSyD7YjbLtUlWB6hn-VeTBJEhdch7sCOJVO0', {}, {
       query: {
         method:'GET',
         params:{
           location: null
         },
         isArray:false
       }
     });
   });
