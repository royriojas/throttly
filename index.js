/**
 * throttle returns a new function that will limit the amount of calls that can be done to a function
 * in a given threshold.
 *
 * This is useful to rate-limit functions that might otherwise happen too often
 *
 * @method throttle
 * @static
 * @param f {Function} The function to throttle
 * @param ms {Number}  The number of milliseconds to wait before allow the next function call to be executed.
 * @param [ctx=undefined] {Object|undefined} the context on which this function will be executed
 * (the 'this' object inside the function wil be set to context)
 * @param [immediate=false] {Boolean} whether to execute the function at the beginning
 * or at the end of the waiting period
 */
module.exports = function throttle( f, ms, ctx, immediate ) {

  var timer = null;

  var fn = function () {
    ctx = ctx || this;
    //if this is the first time of the sequence of calls to this function
    if ( timer === null ) {
      //store the original arguments used to call this function
      var args = arguments;

      //call the function with the ctx and the original arguments
      immediate && f.apply( ctx, args );
      //set the timer
      timer = setTimeout( function () {
        //to make sure the next set of calls will be executing the first call as soon as possible
        timer = null;
        (!immediate) && f.apply( ctx, args );
      }, ms );
    }
  };

  fn.cancel = function () {
    clearTimeout( timer );
  };

  return fn;
};
