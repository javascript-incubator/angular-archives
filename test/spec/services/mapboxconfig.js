'use strict';

describe('Service: MapboxConfig', function () {

  // load the service's module
  beforeEach(module('ngRdpApp'));

  // instantiate service
  var MapboxConfig;
  beforeEach(inject(function (_MapboxConfig_) {
    MapboxConfig = _MapboxConfig_;
  }));

  it('should do something', function () {
    expect(!!MapboxConfig).toBe(true);
  });

});
