var PI = Math.PI;

exports.area = function(r) {
  return PI * r * r;
}

exports.circumference = function(r) {
  return 2 * PI * r;
}

// accessing the exported functions -- 3 types of requires

// 1) use relative path if we created the file
var circle = require('./modules');
circle.area(4);
circle.circumference(4);


// 2) call module by name if it is part of node core or if you installed and external module using npm
var fs = require('fs'); // node core module fs--gives access to the file system
// enter the node REPl and type 'fs' to see a list of methods in this obj

// 3) install external module 'colors' by running 'npm i colors' and then require module
var colors = require('colors');

/* Note1: node will first look at the global modules first and use that module, even if we have a local module by that name
 * if it doesn't find the module there, node looks at the local node_modules folder
 * if it doesn't find the module in the current directory (/Users/gabrielferraz/Desktop/practice/nodeREPLSnippets), node will traverse up the directories
 * looking for the module in a node_modules folder. i.e. if the module is not found in '/Users/gabrielferraz/Desktop/practice/nodeREPLSnippets/node_modules'
 * node will look for '/Users/gabrielferraz/Desktop/practice//node_modules', then '/Users/gabrielferraz/Desktop/practice/node_modules', and continue all the way up the root unless the module is found
 */

 /* Note2: when we require a module we don't need to add the '.js/.json/.node' file extesions.
  * Node will first look for a '.js' file (say colors.js), then a '.json' file, (which it treats as a json file).
  * and finally a '.node' file, which it treats as a compiled file.
  * This happens for external modules as well as for files we create (i.e. in this directory. if we "require('node-env')" node will require 'node-env.js', not 'node-env.json')
  */

 /* Note3: if a package will be used from the command line, we need to install it globally using flag '-g'. i.d. npm install -g gulp
  * if thd module is only needed for a project, install it in the node_modules of that project (simple install without the flag -g)
	*/

	/* Note4: we can download a module from the node website or from github
	 * from node we use the package name, such as 'npm install winston'
	 * from github we need to provide the repository url and a pound sign followed by the branch: 'https://github.com/winstonjs/winston#master' or 'https://github.com/winstonjs/winston/tarball/master'
	 */


