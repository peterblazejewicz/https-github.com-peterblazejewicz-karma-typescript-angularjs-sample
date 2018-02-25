(function(angular) {
  class TemperatureService {
    getInfo(weather) {
      switch (weather) {
        case 0:
          return '15°C';
        case 1:
          return '35°C';
        case 2:
          return '-15°C';
      }
    }
  }
  angular.module('app').service('temperature', TemperatureService);
})(angular);
