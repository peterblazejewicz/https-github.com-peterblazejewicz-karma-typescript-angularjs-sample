(function(angular) {
  class WeatherToday {
    $postLink = () => console.log('$postLink');
    $onChanged = () => console.log('$onChanged');
    $onInit = () => {
      console.log('$onInit');
      this.weatherInfo = this.weather.getInfo();
    };
    $onDestroy = () => console.log('$onDestroy');

    constructor(weather) {
      this.weather = weather;
    }
  }
  WeatherToday.$inject = ['weather'];

  angular.module('app').directive(
    'weatherToday',

    function() {
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
    },
  );
})(angular);
