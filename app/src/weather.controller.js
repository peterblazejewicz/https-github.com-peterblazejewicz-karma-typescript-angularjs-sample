(function(angular) {
  angular.module("app").controller("weatherController", [
    "$scope",
    "date",
    function($scope, date) {
      $scope.getDate = function() {
        return date.getDateString(new Date());
      };
    }
  ]);
})(angular);
