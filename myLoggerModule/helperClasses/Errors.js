const util = require('util');
const config = require('../config');

class ExceptionsHandler {
	constructor(exception, message) {
   		this.exception = exception;
   		this.message = message;
	}

	formatError() {
		let errorObj = {
			exception: this.exception,
			message: this.message
		};
		
		return new Error(util.inspect(errorObj)); // need util.inspect to drill into the object and get key/value pairs (otherwise it prints [Object Object])
	}

	toString() {
		let formattedError = this.formatError();
		console.log(config.pe.render(formattedError));
	}
}

class ArgumentException extends ExceptionsHandler {
	constructor(exception, message) {
		super(exception, message);
	}
}

module.exports = {
	ArgumentException
}