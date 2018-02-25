interface IWeatherController {
  getDate(): string;
}

(function(angular) {
  class WeatherController<IWeatherController> {
    constructor(private date: any) {
      debugger;
    }

    getDate() {
      return this.date.getDateString(new Date());
    }
  }
  WeatherController.$inject = ["date"];
  angular.module("app").controller("weatherController", WeatherController);
})(angular);
