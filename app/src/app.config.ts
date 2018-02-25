(function(angular) {
  function AppConfig(
    $provide: angular.IServiceProvider,
    $routeProvider: angular.route.IRouteProvider
  ) {
    $routeProvider
      .when("/weather", {
        templateUrl: "src/weather.template.html",
        controller: "weatherController",
        controllerAs: "$ctrl",
      })
      .otherwise({ redirectTo: "/weather" });
  }
  AppConfig.$inject = ["$provide", "$routeProvider"];

  angular.module("app").config(AppConfig);
})(angular);
