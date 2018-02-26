// @ts-check
(function(angular) {
  'use strict';
  class DateService {
    /**
     * @param {Date} dt
     * @returns {string}
     */
    getDateString(dt) {
      return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
    }
  }
  angular.module('weather.app').service('date.service', DateService);
})(angular);
