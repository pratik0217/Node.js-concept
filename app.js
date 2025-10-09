const data = require('./part5');
// console.log(data.userName);

const fs = require('fs');
fs.writeFileSync("part6.js","console.log('Modules in Node.js')");
fs.writeFileSync("part7.js","console.log('Create Server in Node.js')");
fs.writeFileSync("part8.js","console.log('Install external package in Node.js');");