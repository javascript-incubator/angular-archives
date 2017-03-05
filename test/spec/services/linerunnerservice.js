'use strict';

describe('Service: LineRunnerService', function () {

  // load the service's module
  beforeEach(module('ngRdpApp'));

  // instantiate service
  var LineRunnerService;
  beforeEach(inject(function (_LineRunnerService_) {
    LineRunnerService = _LineRunnerService_;
  }));

  it('should do something', function () {
    expect(!!LineRunnerService).toBe(true);
  });

});
