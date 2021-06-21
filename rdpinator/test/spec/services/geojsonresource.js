'use strict';

describe('Service: GeojsonResource', function () {

  // load the service's module
  beforeEach(module('ngRdpApp'));

  // instantiate service
  var GeojsonResource;
  beforeEach(inject(function (_GeojsonResource_) {
    GeojsonResource = _GeojsonResource_;
  }));

  it('should do something', function () {
    expect(!!GeojsonResource).toBe(true);
  });

});
