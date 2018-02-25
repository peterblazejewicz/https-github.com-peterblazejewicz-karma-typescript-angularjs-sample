import "angular-mocks";
import angular from "angular";

describe("weather controller", () => {
  var $rootScope: any;
  var $controller: any;

  var testDateValue = "2017/8/22";

  beforeEach(angular.mock.module("app"));

  beforeEach(
    angular.mock.inject((_$controller_: any, _$rootScope_: any) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    })
  );

  it("should initialize correctly", () => {
    $controller("weatherController", {
      $scope: $rootScope,
      date: {
        getDateString: function() {
          return testDateValue;
        }
      }
    });
    expect($rootScope.getDate()).toBe(testDateValue);
  });
});
