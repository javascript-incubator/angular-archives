'use strict';

describe('Service: GeneralCoordinates', function () {

  // load the service's module
  beforeEach(module('ngRdpApp'));

  // instantiate service
  var GeneralCoordinates;
  beforeEach(inject(function (_GeneralCoordinates_) {
    GeneralCoordinates = _GeneralCoordinates_;
  }));

  it('should do something', function () {
    expect(!!GeneralCoordinates).toBe(true);
  });

});
