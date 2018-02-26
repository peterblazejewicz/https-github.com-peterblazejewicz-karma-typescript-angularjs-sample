// @ts-check
(function(angular) {
  'use strict';
  class TemperatureService {
    /**
     * @param {number} weather
     * @returns {string}
     */
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
  angular
    .module('weather.app')
    .service('temperature.service', TemperatureService);
})(angular);
