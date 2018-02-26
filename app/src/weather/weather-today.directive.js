// @ts-check
(function(angular) {
  /**
   * @implements {angular.IComponentController}
   */
  class WeatherToday {

    /**
     * Creates an instance of WeatherToday.
     * @param {any} weather
     * @memberof WeatherToday
     */
    constructor(weather) {
      this.weather = weather;
    }

    $postLink() {
      console.log('$postLink');
    }

    /**
     * @param {angular.IChangesObject} changes
     * @memberof WeatherToday
     */
    $onChanges(changes) {
      console.log('$onChanged');
    }

    $onInit() {
      console.log('$onInit');
      this.weatherInfo = this.weather.getInfo();
    }

    $onDestroy() {
      console.log('$onDestroy');
    }
  }
  WeatherToday.$inject = ['weather.service'];

  /**
   * @returns {angular.IDirective}
   */
  function WeatherTodayDirective() {
    return {
      replace: true,
      scope: {},
      bindToController: {
        weatherInfo: '<',
      },
      controller: WeatherToday,
      controllerAs: '$ctrl',
      template: '<h2>The weather outside is {{ $ctrl.weatherInfo }}.</h2>',
    };
  }

  angular
    .module('weather.app')
    .directive('weatherToday', WeatherTodayDirective);
})(angular);
