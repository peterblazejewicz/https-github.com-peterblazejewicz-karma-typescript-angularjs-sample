(function(angular) {
  function AppConfig(
    $provide: angular.IServiceProvider,
    $routeProvider: angular.route.IRouteProvider,
  ) {
    $routeProvider
      .when('/weather', {
        templateUrl: 'src/weather/weather.template.html',
        controller: 'weather.controller',
        controllerAs: '$ctrl',
      })
      .otherwise({ redirectTo: '/weather' });
  }
  AppConfig.$inject = ['$provide', '$routeProvider'];

  angular.module('weather.app').config(AppConfig);
})(angular);
