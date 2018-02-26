import 'angular-mocks';
import angular, { auto } from 'angular';

describe('temperature service', () => {
  let temperature: any;

  beforeEach(angular.mock.module('weather.app'));

  beforeEach(
    inject(($injector: auto.IInjectorService) => {
      temperature = $injector.get('temperature.service');
    }),
  );

  it('should be defined', () => {
    expect(temperature).not.toBeUndefined();
  });

  it('should return correct values', () => {
    expect(temperature.getInfo(0)).toBe('15°C');
  });

});
