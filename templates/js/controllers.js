//HERE Is hwer ethe apmoduesles live. 

var wedoApp = angular.module("wedoApp", ['ngRoute']); 
wedoApp.controller('HomeCtrlr',  ['$scope', function ($scope) {
	console.log("GOTTEN IN HERE"); 
  $scope.fullName = "YADA"; 
}]);
//coontains the contorlelrs for all the html files. 
