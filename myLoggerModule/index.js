const config = require('./config');
const ArgumentException = require('./helperClasses/Errors.js').ArgumentException;

//===========================
// if we write and export the function this way we can use it direclty:
// usage:  var log = require('logger'); log('hello world');

// let log = (value, logType=null) => {
// 	if (logType) {
// 		if (logTypes[logType]) {
// 			value = logTypes[logType](value);
// 		} else {
// 			let message = logTypes[error]('This function takes either of these three strings as an optional argument: "error", "warn", or "notice". Any other value will cause an error')
// 			throw new ArgumentException(message);
// 		}
// 	}
// 	console.log(value);
// }
// // or
// function log(value, logType=null) {
// 	console.log(value);
// }
// module.exports = log;


//===========================
// if we use either construction below we can't use the method directly
// usage:  let logger = require('logger'); logger.log('hello world');

module.exports = {
	log: function(value, logType, next) {
		if (logType) {
			if (config.logTypes[logType]) {
				value = config.logTypes[logType](value);
			} else {
				let exception = new ArgumentException(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.message);
				return exception.toString();
			}
		}
		console.log(value);
		next && next();
	}
}
// or
// exports.log = (value, logType=null) => {
// 	console.log(value);
// }




