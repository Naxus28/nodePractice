**Steps to create a module (our module will be a simple utility that logs messages to the console)**

1.) **mkdir logger**

2.) **cd logger && npm init**

3.) fill out the questions (change version to 0.1.0 and license to MIT if applicable)

4.) write code on the entry point file 'index.js' (we can have other files with utility methods and require those files in 'index.js')

5.) index.js needs to export the functionality we built as methods.
```javascript
var logger = (value) => console.log(value);
module.exports = logger;
```


**Test module (_There are different ways to test the module_)**


-----1-----

1.) **mkdir testmodule && cd testmodule**

2.) **npm install ../myLoggerModule** (assuming '/test' and '/myLoggerModule' are at the same level)

3.) enter the node REPL by typing **node** on the terminal window

4.) > var logger = require('logger'); //assuming you used the name node suggested when you initiated the 'logger' package (when you create the package.json for the module, node uses the same name as the parent directory by default. In this case I changed the name from 'myLoggerModule' to 'logger')

5.) Modules can be exported in different ways. It is important to know if the module exported is the method itself and can be invoked directly (i.e. logger('Hello World')) or
if the module is an object in which the function is a key/pair value. Because modules normally perform more than one action, they are normally exported as objects with many functions, like so:
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
logger.log('Hello World'));

// a module can also export its member functions individually such as below. Like in the case above, the methods exported here can't be accessed directly because they are members of the exported module object

// ES6
exports.log = (value) => console.log(value); // or

// or ES5
exports.log = function (value) { console.log(value); };


// usage:
var logger = require('logger');
logger.log('Hello World')); //should log 'Hello World' on the console
```

The 'logger' module will only perform one function: log messages to the console. We can therefore export the method in such a way that we can use it directly (keep in mind this is not the case for the majorioty of modules. I am just doing it this way to illustrate how 'exports' works):
```javascript
// ES6
var log = (value) => console.log(value);

// or ES5
function log(value) { console.log(value); }

// export the 'log' method as the module itself
module.exports = log;


// usage:
var log = require('logger');
log('Hello World')); //should log 'Hello World' on the console
```

-----2-----

1.) Same as above

2.) **npm init** (use default options since this directory is just for testing)

3.) **npm install ../myLoggerModule --save-dev** (when this is finished you should see 'logger' as a dependency in your package.json)

4.) **vim/nano index.js** (file name doesn't matter here because I ran the script manually for testing but use 'index.js' for good practice)

5.) Write the code for test.js:
```javascript
// invoke the method as a member of the module or as the module itself(depending on how the module was exported--see item 5 above)
var logger = require('logger');
logger.log('Hello World'));

// or

var log = require('logger')
log('Hello World');
```

6.) On the terminal window, run **node index** (you should see 'Hello World' loggered on terminal)


**Items you need to publish a module**


1.) The module itself

2.) package.json complete (with a git repo)

3.) Test code

4.) A README.md file describing the module and explaining how to use it



