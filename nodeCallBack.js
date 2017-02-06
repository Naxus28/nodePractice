// callbacks are at the core of node processess.
// They allow node to perform faster because the process doesn't stop when a function is called since the function that works as a wrapper for the callback will always return

let numbers = [1, 2, 3];

let numSum = (numbers) => {
   return numbers.reduce( (prev, next) => prev + next );
}
numSum(numbers);

let getDirections = (location) => {
 if (location === 'downtown') { console.log('Make a right at the light'); }
 if (location === 'uptown') { console.log('Make a left at the light'); }
}
// function with callback
askDirections = (location, cb) => cb(location);
askDirections('downtown', getDirections);
askDirections('uptown', getDirections);
