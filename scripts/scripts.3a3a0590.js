"use strict";angular.module("shelterFinder3App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("shelterFinder3App").controller("MainCtrl",["$scope","current","NgMap",function(a,b,c){var d=this;d.placeChanged=function(){d.place=this.getPlace(),console.log("location",d.place.geometry.location),d.home=d.map.getCenter(),d.shelterData=b.apiCall({lat:d.home.lat(),lng:d.home.lng()}),d.map.setCenter(d.place.geometry.location)},c.getMap().then(function(a){d.map=a,d.setHome=function(){d.home=d.map.getCenter(),d.shelterData=b.apiCall({lat:d.home.lat(),lng:d.home.lng()})}})}]),angular.module("shelterFinder3App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("shelterFinder3App").factory("current",["$resource",function(a){var b={};return b.apiCall=function(a,b){console.log(a,b)},b}]),angular.module("shelterFinder3App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div ng-controller="MainCtrl as vm"> <!-- <div ng-show="vm.place">\r\n      Address = {{vm.place.formatted_address}} <br/>\r\n    </div> --> <ng-map class="map" default-style="false" center="seattle"> <custom-control class="searchControl" position="TOP_CENTER"> <h2>Find Current Shelters</h2> <input places-auto-complete size="80" ng-model="vm.address" component-restrictions="{country:\'us\'}" on-place-changed="vm.placeChanged()"> </custom-control> <custom-control class="footer" id="set-home" position="BOTTOM" index="1" on-click="vm.setHome()"> <button class="btn btn-primary btn-large">Find Shelters</button> </custom-control> </ng-map> </div>')}]);