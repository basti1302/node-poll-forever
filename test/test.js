'use strict';

var chai = require('chai');
var poll = require('..');

chai.should();

describe('poll', function() {

  it('should call onSuccess', function(done) {
    var result = false;
    poll(function() {
      return result;
    }, function() {
      done();
    });
    setTimeout(function() {
      result = true;
    }, 30);
  });

  it('should not call onSuccess if condition never holds', function(done) {
    var hasBeenCalled = false;
    poll(function() {
      return false;
    }, function() {
      hasBeenCalled = true;
    });

    setTimeout(function() {
      hasBeenCalled.should.be.false;
      done();
    }, 70);
  });

});
