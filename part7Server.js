console.log('Create Server in Node.js')

const server = require('http');
server.createServer((request, response)=> {
    response.end("500");
}).listen(2500);