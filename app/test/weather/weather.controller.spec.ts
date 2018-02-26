import 'angular-mocks';
import angular from 'angular';

describe('weather controller', () => {
  var $controller: any;

  var testDateValue = '2017/8/22';

  beforeEach(angular.mock.module('weather.app'));

  beforeEach(
    angular.mock.inject((_$controller_: any) => {
      $controller = _$controller_;
    }),
  );

  it('should initialize correctly', () => {
    const controller = $controller('weather.controller', {
      "date.service": {
        getDateString: function() {
          return testDateValue;
        },
      },
    });
    expect(controller.getDate()).toBe(testDateValue);
  });
});
