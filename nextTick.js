a// functions
let logger = (param) => {
	param = param || 'No arg passed';
 	console.log(param);
};

let getDirections = (location) => {
 	if (location === 'home') { logger('Go straight'); }
 	if (location === 'downtown') { logger('Make a right at the light.'); }
};

let askDirections = (location, cb) => cb(location);

// logging
logger('Start');

setTimeout(logger, 0);

process.nextTick( () => {
  logger('Next tick');
});

setTimeout(logger, 0);

askDirections('home', getDirections);

logger('End');


/*
Result:
	Start -- logger
	Go straight -- askDirections('home', getDirections);
	End -- logger
	Next tick -- process.nextTick
	No arg passed -- setTimeout
	No arg passed -- setTimeout
*/

