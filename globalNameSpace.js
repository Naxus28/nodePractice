/* if we enter the node REPL this value will not be available in the global obj after it is set
 * if we require the file in the REPL via 'var globalTest = require('./globalNameSpace')'
 * we can access the setter and the getter but not the variable (even if we export it because by the time we export it will still be undefined)
 * we can only have acess to it via the getter
*/
var globalValue;

exports.setGlobal = function(value) {
	globalValue = value;
}

exports.getGlobal = function() {
  return globalValue;
}


