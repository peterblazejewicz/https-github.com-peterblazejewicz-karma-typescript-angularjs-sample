import 'angular-mocks';
import angular from 'angular';

describe('weather service', () => {
  var weather: any;

  beforeEach(angular.mock.module('app'));

  beforeEach(
    inject((_weather_: angular.IModule) => {
      weather = _weather_;
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
