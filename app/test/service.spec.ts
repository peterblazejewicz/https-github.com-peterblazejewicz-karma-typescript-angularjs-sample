import 'angular-mocks';
import angular, { auto } from 'angular';

describe('weather service', () => {
  var weather: any;

  beforeEach(angular.mock.module('weather.app'));

  beforeEach(
    inject(($injector: auto.IInjectorService) => {
      weather = $injector.get('weather.service');
    }),
  );

  it('should not be null', () => {
    expect(weather).not.toBeNull();
  });

  it('should return a value', () => {
    var value = weather.getInfo();
    expect(value).not.toBeUndefined();
  });
});
