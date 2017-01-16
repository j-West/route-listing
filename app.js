console.log("!");

var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when("/", {
      controller : "MainCtrl",
      templateUrl: "partials/main.html",
    })
    .when("/firsthw", {
      controller: "FirstHwCtrl",
      templateUrl: "partials/firsthw.html",
    })
    .when("/secondhw", {
      controller: "SecondHwCtrl",
      templateUrl: "partials/secondhw.html",
    })
    .otherwise({
      redirectTo: "/"
    })
})
