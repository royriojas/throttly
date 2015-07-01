[![NPM Version](http://img.shields.io/npm/v/throttly.svg?style=flat)](https://npmjs.org/package/throttly)
[![Build Status](http://img.shields.io/travis/royriojas/throttly.svg?style=flat)](https://travis-ci.org/royriojas/throttly)

# throttly
Yet another throttle implementation with 0 dependencies

## Usage
```javascript
var throttly = require('throttly');
```

### signature
```javascript
function throttly(fnToThrottle: Function, threshold:Number, [ctx:Object], [immediate:Boolean]):Function
```

- **fnToThrottle**: Function
  The function to throttle
- **threshold**: Number
  The number of milliseconds for the throttle rate
- **ctx**: Object
  The this object inside the throttled function. If none specified will try to use the ctx of the invocator.
- **immediate**: Boolean
  If true, the function will be executed on the leading edge

## Install

```bash
npm i --save throttly
```

## Example

```javascript
var throttly = require('throttly');

var throttledFn = throttly(function () { console.log('I am called') }, 200);
throttledFn();
// after 200ms
// output: I am called
var ctx = {
  name: 'some obj';
}
var throttledFn = throttly(function () { console.log('I am called from', this.name) }, 200, ctx);
throttledFn();
// after 200ms
// output: I am called from some obj

var throttledFn = throttly(function () { console.log('I am called') }, 200, null, true /*immediate*/);
throttledFn();
// immediately
// output: I am called
// other calls will have to wait 200ms before the last execution
```

## Changelog
[changelog](./changelog.md)

## License
[MIT](./LICENSE)
