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
    constructor(private date: any) {
      debugger;
    }

    getDate() {
      return this.date.getDateString(new Date());
    }
  }
  WeatherController.$inject = ['date'];
  angular.module('app').controller('weatherController', WeatherController);
})(angular);
