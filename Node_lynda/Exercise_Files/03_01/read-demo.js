// 2 ways to do the same thing
var fs = require('fs');
var data = require('./data1.json');

// This is an object
console.log(data.name);

fs.readFile('./data1.json', 'utf-8', function(err, data){
  // This is a string
  // console.log(data.name);
  data = JSON.parse(data);
  console.log(data.name);
})