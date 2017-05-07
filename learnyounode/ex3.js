var input = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(input);
var converted = buffer.toString();
var lines = converted.split('\n');
console.log(lines.length - 1);

