const clc = require('cli-color');

const logTypes = {
	error: clc.red.bold,
	warn: clc.yellow,
	notice: clc.blue
};

const exceptions = {
	argumentException: {
		exceptionType: 'Argument Exception',
		message: 'Please use either "error", "warn", or "notice" as a second optional argument to "log". Any other value will throw an error'
	}
};

module.exports = {
	logTypes,
	exceptions
};