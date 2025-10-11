const data = require('./part5');
console.log(data.userName);

const fs = require('fs'); // file system operation
fs.writeFileSync("part6.js","console.log('Modules in Node.js')"); // create new file and inside the content
fs.writeFileSync("part7Server.js","console.log('Create Server in Node.js')");
fs.writeFileSync("part8.js","console.log('Install external package in Node.js');");
fs.writeFileSync("part9.js","console.log('Install nodemon package in Node.js');");
fs.writeFileSync("part10.js","console.log('Understanding Server response');");
fs.writeFileSync("part11.js","console.log('Make Simple API');");
fs.writeFileSync("part12.js","console.log('Understand Client Request');");