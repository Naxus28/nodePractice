var fs = require('fs');
// when executed in the node REPL, core node modules like 'fs' don't need to be 'required'. We can simply run the functions below and they will be executed
// we can run the functions all at once via 'node readFile' or enter the REPL and write them out one by one (without the require statement)
// the unmodified buffer object:
fs.readFile('sample.txt', function(err, data) {
  if (err) throw err;
  console.log('\n');
  console.log(data); // prints out the buffer obj itself: <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... >
  console.log('===========\n');
});

// writing the buffer object out using the toString() method:
fs.readFile('sample.txt', function(err, data){
  console.log(data.toString()); // prints the text
  console.log('===========\n');
});

// writing out the contents of the buffer object by specifying the encoding:
fs.readFile('sample.txt', 'utf8', function(err, data){
   console.log(data); // prints the text
   console.log('\n');
});
