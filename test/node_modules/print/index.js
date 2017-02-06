//===========================
// if we write and export the function this way we can use it direclty:
// var print = require('print');
// print('hello world');

var print = (value) => console.log(value);
// or
function print(value) { console.log(value); }
module.exports = print;


//===========================
// if use either construction below we can't use the method it directly
// var printer = require('print');
// printer.print('hello world');

module.exports = {
	print: function(value) {
		console.log(value)
	}
}
// or
exports.print = (value) => console.log(value);




