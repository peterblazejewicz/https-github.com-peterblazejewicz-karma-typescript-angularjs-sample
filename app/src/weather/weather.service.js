// @ts-check
(function(angular) {
  'use strict';

  /**
   * @param {any} temperature
   */
  function WeatherService(temperature) {
    this.getInfo = getInfo;

    /**
     * @returns {string} weather status
     */
    function getInfo() {
      var time = new Date().getTime();
      var weatherIndex = time % 3;
      var weatherStatus = '';

      switch (weatherIndex) {
        case 0:
          weatherStatus = 'Rainy';
          break;
        case 1:
          weatherStatus = 'Sunny';
          break;
        case 2:
          weatherStatus = 'Snowy';
          break;
      }
      return weatherStatus + ' with ' + temperature.getInfo(weatherIndex);
    }
  };
  WeatherService.$inject = ['temperature.service'];

  angular.module('weather.app').service('weather.service', WeatherService);
})(angular);
