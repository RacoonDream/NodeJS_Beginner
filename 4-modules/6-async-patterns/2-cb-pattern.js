const fs = require('fs');
//this is asynch readfile so TEST will be printed by 2nd event loop and once 1st event loop gets data it will be shown
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
