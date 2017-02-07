const util = require('util');
const config = require('../config');

class ExceptionsHandler {
	constructor(message, exception) {
   	this.message = message;
   	this.exception = exception;
	}

	formatError() {
		let errorObj = {
			exception: this.exception,
			message: this.message
		};
		return config.logTypes['error'](util.inspect(errorObj));
	}

	toString() {
		let formattedError = this.formatError();
		return new Error(formattedError);
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