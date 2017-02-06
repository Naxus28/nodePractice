// there are multiple ways to export modules in node

// 1) export functions directly
var PI = Math.PI;

exports.area = function(r) {
  return PI * r * r;
}

exports.circumference = function(r) {
  return 2 * PI * r;
}

// 2) export the module: two different ways:
// module.exports = function(r) {
// 	return {
// 		area: function(r) {
//   		return PI * r * r;
// 		},
// 		circumference: function(r) {
// 		  return 2 * PI * r;
// 		}
// 	};
// }
/* the obj exported is the wrapper function, so to access the inner functions we need to do somtehing like
 * var circle = require('./modules-export'); 'var myCircle = circle(4)'
 * this is not a very flexible way to perform the exports
 */

// or (I prefer this because the functions can be accessed directly and are decoupled from a wrapper function signature)
function area(r) {
  return PI * r * r;
}

function circumference(r) {
  return 2 * PI * r;
}

module.exports = {
	area,
	circumference
}
// use: var circle = require('./modules-export'); circle.area(4), circle.circumference(4)