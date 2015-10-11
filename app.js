var myApp = angular.module('myApp', []); 


myApp.controller("todoPageController", function($http, $scope, $rootScope)){
  $scope.hello = "What is this?"
  $scope.firstName = "John"; 
}); 

