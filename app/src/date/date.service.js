(function(angular) {
  class DateService {
    getDateString(dt) {
      return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
    }
  }
  angular.module('weather.app').service('date.service', DateService);
})(angular);
