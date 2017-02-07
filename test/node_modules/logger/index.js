//===========================
// if we write and export the function this way we can use it direclty:
// usage:  var log = require('logger'); log('hello world');

var log = (value) => console.log(value);
// or
// function log(value) { console.log(value); }
module.exports = log;


//===========================
// if we use either construction below we can't use the method directly
// usage:  var logger = require('logger'); logger.log('hello world');

module.exports = {
	log: function(value) {
		console.log(value)
	}
}
// or
exports.log = (value) => console.log(value);




