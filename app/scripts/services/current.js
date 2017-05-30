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



    // Public API here
     return $resource('https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=:lat,:lng&radius=500&keyword=homeless+shelter&key=AIzaSyD7YjbLtUlWB6hn-VeTBJEhdch7sCOJVO0', {}, {
       query: {
         method:'GET',
         params:{
            lat:'47.6062095',
            lng:'-122.3320708'
         },
         isArray:false
       }
     });

   });
