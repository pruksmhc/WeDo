var app = angular.module('myApp', []);
app.controller('todoPageController', function($scope) {
    $scope.firstName = "John";
});
//If the user is not logge din, go to the home page, if the user is logged in, go to the todo list page. 
//For now, I'll just use AAmazon web services. 