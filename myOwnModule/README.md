**Steps to create a module (our module will be a simple utility that prints messages to the console)**
1. create the module directory. i.e. mkdir print
2. > cd print && npm init
3. fill out the questions (change version to 0.1.0 and license to MIT if applicable)
4. write code on the entry point file 'index.js' (we can have other files with utility methods and require those files in 'index.js')
5. index.js needs to export the functionality we built as methods. i.e.
```javascript
var print = (value) => console.log(value);
module.exports = print;
```
**Testing module (_There are different ways to test the module_)**
-----A-----
1.) Create a new directory and install the module there and test it:
2.) mkdir testmodule && cd testmodule
3.) npm install ../print (assuming 'testmodule' and 'print' are at the same level)
4.) enter the node REPL by typing 'node' on the terminal window
5.) var print = require('print') //assuming you used the name node suggested when you initiated the 'print' package (node uses the same name as the parent directory ny default)
6.) print('Hello World'); //should print 'Hello World' on the console

-----B-----
1.) Same as above
2.) Same as above
3.) npm init (use default options since this is just a test directory)
4.) npm install ../print --save-dev (when this is finished you should see 'print' as a dependency in your package.json)
5.) vim/nano index.js (file name doesn't matter here but use 'index.js' for good practice)
6.) Create the test js:
```javascript
var print = require('print')
print('Hello World');
```
7.) On the terminal window, run this index.js file: > node index -- you should see 'Hello World' printed on terminal