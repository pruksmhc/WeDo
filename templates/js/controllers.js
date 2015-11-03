//HERE Is hwer ethe apmoduesles live. 

var wedoApp = angular.module("wedoApp", ['ngRoute']); 
wedoApp.controller('HomeCtrlr',  ['$scope', function ($scope) {
	console.log("GOTTEN IN HERE"); 
  $scope.fullName = "YADA"; 
}]);
//coontains the contorlelrs for all the html files. 

wedoApp.controller("CreateProjectController", function($scope, $http){
	  $scope.duedate = ""; 
    $scope.todoTitle = ""; 
    $scope.tododescription = ""; 

	$scope.generateTodoItem = function(){
	console.log("WOAH"); 
	console.log("Scope was "+ $scope.duedate+$scope.todoTitle+$scope.tododescription); 
//	console.log("The things gotten are " + $scope.duedate  +  $scope.todoTitle + $scope.tododescription); 
	$http({
      		method: "POST", 
      		url: "http://yadas-air:3000/todoitem", 
      		data: {
      				title:  $scope.todoTitle  , 
   		description: $scope.tododescription ,
   		due_date: $scope.duedate
      		}
    	}).success(function(data) {
    		console.log("Success! Data was passed in and this happened"+JSON.stringify(data));
    		
    	}).error(function(err) {
    		console.log("Error was "+JSON.stringify(err)); 
    		
    	});
    };

});