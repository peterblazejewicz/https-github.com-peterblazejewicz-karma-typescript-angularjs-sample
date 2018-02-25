(function(angular) {
  angular.module("app").config([
    "$provide",
    "$routeProvider",
    function($provide, $routeProvider) {
      $routeProvider
        .when("/weather", {
          templateUrl: "src/weather.template.html",
          controller: "weatherController"
        })
        .otherwise({ redirectTo: "/weather" });
    }
  ]);
})(angular);
