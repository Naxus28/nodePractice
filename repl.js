//these are some notes for this file session. Please don't delete them!
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
