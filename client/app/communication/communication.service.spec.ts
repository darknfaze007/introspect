'use strict';

describe('Service: communication', function () {

  // load the service's module
  beforeEach(module('introspectApp'));

  // instantiate service
  var communication;
  beforeEach(inject(function (_communication_) {
    communication = _communication_;
  }));

  it('should do something', function () {
    expect(!!communication).toBe(true);
  });

});
