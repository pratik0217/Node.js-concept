console.log('Modules in Node.js');

const os = require('os');
console.log(os.cpus()); // information about laptop
console.log(os.hostname());
console.log(os.platform());

console.log() // globle object is an object that is available in all modules by default.
// do not need to require to use it.