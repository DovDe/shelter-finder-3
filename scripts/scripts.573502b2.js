"use strict";angular.module("shelterFinder3App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("shelterFinder3App").controller("MainCtrl",["$timeout","$scope","current","NgMap",function(a,b,c,d){var e=this;e.placeChanged=function(){e.place=this.getPlace(),console.log("location",e.place.geometry.location),e.home=e.map.getCenter(),e.shelterData=c.query({lat:e.home.lat(),lng:e.home.lng()}),e.map.setCenter(e.place.geometry.location)},d.getMap().then(function(b){e.map=b,e.googleMapsUrl="https://maps.google.com/maps/api/js",e.pauseLoading=!0,console.log("Starting a timer to wait for 2 seconds before the map will start loading"),a(function(){console.debug("Showing the map. The google maps api should load now."),e.pauseLoading=!1,e.home=e.map.getCenter(),e.shelterData=c.query({lat:e.home.lat(),lng:e.home.lng()}),console.log(e.home.lat())},1e3),e.setHome=function(){a(function(){console.debug("Showing the map. The google maps api should load now."),e.pauseLoading=!1,e.home=e.map.getCenter(),e.shelterData=c.query({lat:e.home.lat(),lng:e.home.lng()}),console.log(e.home.lat()),console.log(e.home.lng()),console.log(c.query())},1e3)},e.showDetail=function(a){e.map.showInfoWindow("foo-iw",a.id)}})}]),angular.module("shelterFinder3App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("shelterFinder3App").factory("current",["$resource",function(a){return a("https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=:lat,:lng&radius=1000&keyword=homeless+shelter&key=AIzaSyD7YjbLtUlWB6hn-VeTBJEhdch7sCOJVO0",{},{query:{method:"GET",params:{lat:"47.6062095",lng:"-122.3320708"},isArray:!1}})}]),angular.module("shelterFinder3App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div ng-controller="MainCtrl as vm"> <!-- <div ng-show="vm.place">\r\n      Address = {{vm.place.formatted_address}} <br/>\r\n    </div> --> <div map-lazy-load="https://maps.google.com/maps/api/js" map-lazy-load-params="{{vm.googleMapsUrl}}"> <ng-map class="map" default-style="false" center="seattle"> <custom-control class="searchControl" position="TOP_CENTER"> <h2>Find Current Shelters</h2> <input places-auto-complete size="80" ng-model="vm.address" component-restrictions="{country:\'us\'}" on-place-changed="vm.placeChanged()"> </custom-control> <custom-control class="footer" id="set-home" position="BOTTOM" index="1" on-click="vm.setHome()"> <button class="btn btn-primary btn-large">Find Shelters</button> </custom-control> <marker position="[{{place.geometry.location.lat}}, {{place.geometry.location.lng}}]" ng-repeat="place in vm.shelterData.results" on-click="vm.showDetail(place)" title="{{place.name}}"></marker> <info-window id="foo-iw"> <div ng-non-bindable=""> name: {{place.name}}<br> <!-- <a href="#" ng-click="vm.clicked()">Click Here</a> --> </div> </info-window> </ng-map> </div> </div>')}]);