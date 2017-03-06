/*
	https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
	
	You may have noticed that process.nextTick() was not displayed in the diagram, 
	even though it's a part of the asynchronous API. 
	This is because process.nextTick() is not technically part of the event loop. 
	Instead, the nextTickQueue will be processed after the current operation completes, 
	regardless of the current phase of the event loop.

	Looking back at our diagram, any time you call process.nextTick() in a given phase, 
	all callbacks passed to process.nextTick() will be resolved before the event loop continues. 
	This can create some bad situations because it allows you to "starve" your I/O by making recursive process.nextTick() 
	lls, which prevents the event loop from reaching the poll phase.

	Why would that be allowed?

	Why would something like this be included in Node.js? 
	Part of it is a design philosophy where an API should always be asynchronous even where it doesn't have to be. 
	Take this code snippet for example:

*/

function apiCall (arg, callback) {
  if (typeof arg !== 'string')
    return process.nextTick(callback,
      new TypeError('argument should be string'));
}

/*
The snippet does an argument check and if it's not correct, 
it will pass the error to the callback. 
The API updated fairly recently to allow passing arguments to process.nextTick() 
allowing it to take any arguments passed after the callback to be propagated as 
the arguments to the callback so you don't have to nest functions.

What we're doing is passing an error back to the user but only after we have allowed 
the rest of the user's code to execute. By using process.nextTick() we guarantee that apiCall() 
always runs its callback after the rest of the user's code and before the event loop is allowed to proceed. 
To achieve this, the JS call stack is allowed to unwind then immediately execute the provided callback which 
allows a person to make recursive calls to process.nextTick() without reaching a RangeError:Maximum call stack size exceeded from v8.
*/

/*
This philosophy can lead to some potentially problematic situations. Take this snippet for example:
*/

// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall (callback) { callback(); };

// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall(() => {

  // since someAsyncApiCall has completed, bar hasn't been assigned any value
  console.log('bar', bar); // undefined

});

var bar = 1;


// fixed with process.nextTick, which defers the execution of the callback until
// synchronous operations (such as puttng 'bar' in scope) are cleared from the event loop

function someAsyncApiCall (callback) {
  process.nextTick(callback);
};

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

var bar = 1;