'use strict';

describe('Directive: eggDirective', function () {

  // load the directive's module
  beforeEach(module('easterEggsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<egg-directive></egg-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the eggDirective directive');
  }));
});
