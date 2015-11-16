'use strict';

describe('Service: serviceApis', function () {

  // load the service's module
  beforeEach(module('presalesApp'));

  // instantiate service
  var serviceApis;
  beforeEach(inject(function (_serviceApis_) {
    serviceApis = _serviceApis_;
  }));

  it('should do something', function () {
    expect(!!serviceApis).toBe(true);
  });

});
