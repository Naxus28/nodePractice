**Steps to create a module (our module will be a simple utility that prints messages to the console)**

1.) *mkdir print*
2.) *cd print && npm init*
3.) fill out the questions (change version to 0.1.0 and license to MIT if applicable)
4.) write code on the entry point file 'index.js' (we can have other files with utility methods and require those files in 'index.js')
5.) index.js needs to export the functionality we built as methods.
```javascript
var print = (value) => console.log(value);
module.exports = print;
```


**Test module (_There are different ways to test the module_)**


-----1-----

1.) **mkdir testmodule && cd testmodule**

2.) **npm install ../print** (assuming 'testmodule' and 'print' are at the same level)

3.) enter the node REPL by typing **node** on the terminal window

4.) > var print = require('print'); //assuming you used the name node suggested when you initiated the 'print' package (node uses the same name as the parent directory ny default)

5.) > print('Hello World'); //should print 'Hello World' on the console

-----2-----

1.) Same as above

2.) **npm init** (use default options since this directory is just for testing)

3.) **npm install ../print --save-dev** (when this is finished you should see 'print' as a dependency in your package.json)

4.) **vim/nano index.js** (file name doesn't matter here but use 'index.js' for good practice)

5.) Write the code for test.js:
```javascript
var print = require('print')
print('Hello World');
```

6.) On the terminal window, run **node index** (you should see 'Hello World' printed on terminal)