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

/* a module can also export its member methods individually such as below.
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

The 'logger' module will only perform one function: log messages to the console. We can therefore export the method as the module itself so we can use it directly (keep in mind this is not how the majority of modules is designed. I am just doing it this way to illustrate different uses of 'exports'):
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

2.) On the terminal window run **npm install ../logger** (assuming '/test' and '/logger' are at the same level)

3.) Enter the node REPL by typing **node** on the terminal window

4.) Type **var logger = require('logger');** and press 'enter/return'. You will see 'undefined' on the console. This is because this line of code doesn't return anything when interpreted (you may see the same behavior on browsers' 'console' panel) // Keep in mind 'require' looks for the module name. When the module's package.json is created, node uses the same name as the parent directory by default (that can be changed when creating 'package.json' or later, by renaming the module in 'package.json' after the file has already been created).

5.) Now type **logger**. This will log the 'logger' module to the console and allow us to check if 'logger' is an object that **case 1)** has member methods (you should see _{ log: [Function: log] }_ on the console) or if **case 2)** 'logger' is the method itself (you should see _[Function: log]_ on the console)


```javascript

// usage:
// if case 1
var logger = require('logger');
logger.log('Hello World'));

// if case 2
var log = require('logger'); // in this case, it makes sense to store the module in a variable named 'log' instead of logger
log('Hello World')); //logs 'Hello World' to the console
```

-----2. Test by creating a .js file and requiring the module there-----

1.) Same as above

2.) On the terminal window run **npm init** (use default options since this directory is just for testing)

3.) Then run **npm install ../logger --save-dev** (when this is finished you should see 'logger' as a dev dependency in your package.json)

4.) Finally, run **vim (or nano/pico) index.js** to create the the file where you will 'require' the 'logger' module (the file name doesn't matter here because we will run this script manually but use 'index.js' for good practice)

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


**Publishing a module**
_Items you need to publish a module_

1.) The module itself

2.) package.json complete (with a git repo)

3.) Unit test code

4.) A README.md file describing the module, explaining how it works and how to use it

**Once these items are completed, follow these steps to publish the module and you are done!: https://docs.npmjs.com/getting-started/publishing-npm-packages**



