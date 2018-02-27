import 'angular-mocks';
import angular, { auto } from 'angular';

describe('weather service', () => {
  let weather: any;

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
    const value = weather.getInfo();
    expect(value).not.toBeUndefined();
  });
});
