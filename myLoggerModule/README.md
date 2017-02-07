**Steps to create a module (our module will be a simple utility that logs messages to the console)**

1.) **mkdir logger**

2.) **cd logger && npm init**

3.) fill out the questions (change version to 0.1.0 and license to MIT if applicable)

4.) write code on the entry point file 'index.js' (we can have other files with utility methods and require those files in 'index.js')

5.) index.js needs to export the functionality we built as methods. Modules can be exported in different ways. It is important to know if the module exported is the method itself and can be invoked directly (i.e. logger('Hello World')) or if the module is an object that has member methods. Because modules normally perform more than one action, they are normally exported as objects with several methods, like so:
```javascript
module.exports = {
	log: function(value) {
		console.log(value)
	},
	anotherFunctionHere: function() {
		// do something
	},
	etc
}

// usage:
var logger = require('logger');
logger.log('Hello World')); //should log 'Hello World' to the console

/* a module can also export its member functions individually such as below.
 * Like in the case above, the methods exported here can't be accessed directly because they are members of the exported module object
 */

// ES6
exports.log = (value) => console.log(value);

// or ES5
exports.log = function (value) { console.log(value); };


// usage:
var logger = require('logger');
logger.log('Hello World')); //logs'Hello World' to the console
```

The 'logger' module will only perform one function: log messages to the console. We can therefore export the method in such a way that we can use it directly (keep in mind this is not the case for the majority of modules. I am just doing it this way to illustrate how 'exports' works):
```javascript
// ES6
var log = (value) => console.log(value);

// or ES5
function log(value) { console.log(value); }

// export the 'log' method as the module itself
module.exports = log;


// usage:
var log = require('logger');
log('Hello World')); //logs 'Hello World' on the console
```


**Test if the module works (_There are different ways to test the module_)**
_This is not a unit test. We will simply implement the module and see if it does what it should_


-----1. Test via node REPL-----

1.) **mkdir test && cd test**

2.) **npm install ../myLoggerModule** (assuming '/test' and '/myLoggerModule' are at the same level)

3.) enter the node REPL by typing **node** on the terminal window

4.) > var logger = require('logger'); // 'require' looks for the module name. When the module's package.json is created, node uses the same name as the parent directory by default. In this case I changed the name from 'myLoggerModule' (the parent directory of package.json) to 'logger'

5.) > logger // this will log the 'logger' module to the console and allow us to check if 'logger' is an object that **case 1)** has member methods (logs _{ log: [Function: log] }_) or if **case 2)** it is the method itself (logs _[Function: log]_)


```javascript

// usage:
// if case 1
var logger = require('logger');
logger.log('Hello World'));

// if case 2
var log = require('logger');
log('Hello World')); //logs 'Hello World' to the console
```

-----2. Test by creating a .js file and requiring the module there-----

1.) Same as above

2.) **npm init** (use default options since this directory is just for testing)

3.) **npm install ../myLoggerModule --save-dev** (when this is finished you should see 'logger' as a dependency in your package.json)

4.) **vim/nano index.js** (file name doesn't matter here because the script will be ran manually for testing but use 'index.js' for good practice)

5.) Write the code for test.js:
```javascript
//if the module is an object that has a 'log' method (see item 5 of 'Steps to create a module')
var logger = require('logger');
logger.log('Hello World'));

// if the module is the method itself (see item 5 of 'Steps to create a module')
var log = require('logger')
log('Hello World');
```

6.) On the terminal window, run **node index** (logs 'Hello World' to the console)


**Items you need to publish a module**


1.) The module itself

2.) package.json complete (with a git repo)

3.) Unit test code

4.) A README.md file describing the module, explaining how it works and how to use it



