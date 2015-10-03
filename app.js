var myapp = angular.module('myApp', ["ui.router",  "ui.bootstrap"])
myapp.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /signup
  $urlRouterProvider.otherwise("/");

  $stateProvider.
  state('home', {
    url:'/', 
    templateUrl: "/templates/todoPage.html", 
    controller: "todoPageController"
  })
}).run(function($rootScope, $location, $state) {
  /**$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    var isLogin = toState.name === "login"; 
    var isHome = toState.name ==="home"; 
    var isSignUp = toState.name ==='signup'; 
    console.log("The page going to is "+toState.name); 



    if(!isSignUp &&  !isHome){
    console.log("The rootscope userinfo is " + $rootScope.userInfo);
console.log("The current user signed in is "+ $rootScope.currentUserSignedIn); 
    // now, redirect only not authenticated
    if ((typeof $rootScope.userInfo == "undefined") || (typeof $rootScope.userInfo == "null") ||(!$rootScope.currentUserSignedIn) ) {
      console.log("Redirecting ot login screen"); 
      if (isLogin) {
        return; // no need to redirect 
      }
      console.log("The rootscope userinfo is undefined");
      e.preventDefault(); // stop current execution
      $state.go('login'); // go to login
    }
    }

  });**/
});  

myApp.controller("todoPageController", function($http, $scope, $rootScope)){
  $scope.hello = hello; 
}

