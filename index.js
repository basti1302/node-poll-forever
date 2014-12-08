'use strict';

module.exports = function(condition, onSuccess, interval) {
  interval = interval || 10;
  var handle = setInterval(function() {
    if (condition()) {
      clearInterval(handle);
      onSuccess();
    }
  }, interval);
};
