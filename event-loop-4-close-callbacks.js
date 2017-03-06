//https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

/*setImmediate() vs setTimeout()
setImmediate and setTimeout() are similar, but behave in different ways depending on when they are called.

setImmediate() is designed to execute a script once the current poll phase completes.
setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.
*/

// if we run the following script which is not within an I/O cycle (i.e. the main module), 
// the order in which the two timers are executed is non-deterministic, as it is bound by the performance of the process

setTimeout(function timeout () {
  console.log('timeout');
},0);

setImmediate(function immediate () {
  console.log('immediate');
});

/* results are non-deterministic:
 * timeout 
 * immediate

	or vice versa
 */

/*
However, if you move the two calls within an I/O cycle, the immediate callback is always executed first:
*/

var fs = require('fs')

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  })
})

/* result is always 
 * immediate
 * timeout
*/