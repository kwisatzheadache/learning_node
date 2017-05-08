var input = process.argv[2];
var fs = require('fs');
var output = [] 
fs.readFile(input, function(err, contents) {
  output = (contents.toString().split('\n').length) - 1;
  console.log(output);
    });
