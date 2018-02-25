(function(angular) {
  angular.module("app").service("date", function() {
    this.getDateString = function(dt) {
      return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    };
  });
})(angular);
