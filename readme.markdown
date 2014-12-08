node-poll-forever
=================

Polls (that is, calls) a test function periodically until it returns a trueish value.

```
poll(condition, onSuccess, interval)
```

* `condition`: the function that is called periodically
* `onSuccess`: the callback that is called when `condition` returns a trueish value
* `interval`: how long to wait between each call to `condition`, in milliseconds. Optional, defaults to 10.

Example usage:
```
var poll = require('poll-forever');

var result = false;

poll(function() {
  return result;
}, function() {
  console.log('condition returned true');
});

setTimeout(function() {
  result = true;
}, 100);

```

Release Notes
-------------

* 1.0.0 2014-12-08: Initial release

License
-------

MIT
