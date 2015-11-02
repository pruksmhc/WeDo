//HERE Is hwer ethe apmoduesles live. 

var wedoApp = angular.module("wedoApp", ['ngRoute']); 
wedoApp.controller('HomeCtrlr',  ['$scope', function ($scope) {
	console.log("GOTTEN IN HERE"); 
  $scope.fullName = "YADA"; 
}]);
//coontains the contorlelrs for all the html files. 


wedoApp.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/loggedIn", {templateUrl:   "dashboard.html", <span class="highlight">controller: "HomeCtrlr"</span>})
// Pages
.when("/about", {templateUrl: "partials/about.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/faq", {templateUrl: "partials/faq.html", <span class="highlight">controller: "PageCtrl"</span>})
/* etc… routes to other pages… */
// Blog
.when("/blog", {templateUrl: "partials/blog.html", <span class="highlight">controller: "BlogCtrl"</span>})
.when("/blog/post", {templateUrl: "partials/blog_item.html", <span class="highlight">controller: "BlogCtrl"</span>})
// else 404
.otherwise("/404", {templateUrl: "partials/404.html",  <span class="highlight">controller: "PageCtrl"</span>});
}]);