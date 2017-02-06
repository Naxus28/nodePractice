// in the node REPL run unicode
var str = '\u0068\u0065\u006c\u006c\u006f \u0077\u006f\u0072\u006c\u0064';
//then 'str': it prints 'hello world'
str.length; // 11
Buffer.byteLength(str);  // 11
Buffer.byteLength(str, 'utf8'); // with character encoding 11

var math = '\u00bd + \u00bc = \u00be';
// math prints '½ + ¼ = ¾'
math.length; // 9 because each fraction is considered one character
Buffer.byteLength(math, 'utf8');  //12 because the fractions are 2 bytes in length each

//create a new buffer obj

var buf = new Buffer(5); //creates a buffer with 5 bytes in length in this format <Buffer 00 00 00 00 00>
buf.write('hello world');
buf.toString() // prints 'hello' only because the buffer has only 5 bytes
buf.toJSON(); // prints { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] };
//'data' is an array that represents the buffer obj, in which each number is the utf representation of a character, so <Buffer 104 101 108 108 111> is 'hello'
// check this site to check utf numbers and their characters representation: http://www.utf8-chartable.de/unicode-utf8-table.pl?utf8=dec&unicodeinhtml=dec


// at this point, 'buf' still points to the string 'hello' previously buffered in the variable
// the second argument is the offset, which means we will skip the first two bytes of the previously buffered string (he) and start writing our new string 'yellowish' from there
// however, we still have only 5 bytes so we will only be able to write 3 bytes of 'yellowish', generating a new buffered string 'heyel'
buf.write('yellowish', 2);
buf.toString() // prints 'heyel'

// the third argument is the lenght of the offset
// so we will offset 2 bytes from 'heyel' and write one byte of 'node' (the 'n') in that position
buf.write('node', 2, 1);
buf.toString() // prints 'henel'

// the fourth argument is the encoding
buf.write('ce', 3, 2, 'utf8');
buf.toString() // prints 'hence' -- notice offset is 3 here so we start writing after 'n' of 'henel'


// two methods to compare contents of buffers
var buf1 = new Buffer('1234');
var buf2 = new Buffer('0123');
var buf3 = new Buffer('1234');
var buf4 = new Buffer('5678');

buf1.compare(buf2); // prints 1
buf1.compare(buf3); // prints 0

buf1.equals(buf2); // prints false
buf1.equals(buf3); // prints true

// we can also sort buffers using 'Buffer.compare' as an argument to the 'sort' method
var array = [buf4, buf1, buf2];
array.sort(Buffer.compare); // prints [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34>, <Buffer 35 36 37 38> ]
array.sort(Buffer.compare).toString(); // prints '0123,1234,5678'

// we can slice the buffer
var buf = new Buffer('Hello Gabriel!');
// first param is the offset (or index where the slice starts), and second is the length to be sliced (counting the first index)
var buf1 = buf.slice(0, 4);
buf1.toString() // prints 'Hell'
// notice: 'buf1' is not a new buffer but simply a pointer to the first four characters of 'buf'
// so if we change 'buf1' we will also change 'buf'
buf1.write('xyzw');
buf1.toString(); // prints 'xyzwo Gabriel!'


