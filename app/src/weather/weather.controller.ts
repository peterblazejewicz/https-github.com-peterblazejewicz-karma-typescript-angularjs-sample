interface IWeatherController {
  /**
   * Returns date as String
   * @returns {string}
   * @memberof IWeatherController
   */
  getDate(): string;
}

(function(angular) {
  class WeatherController implements IWeatherController {
    constructor(private date: any) {}

    getDate() {
      return this.date.getDateString(new Date());
    }
  }
  WeatherController.$inject = ['date.service'];
  angular.module('weather.app').controller('weather.controller', WeatherController);
})(angular);
