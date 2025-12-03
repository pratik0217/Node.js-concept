console.log('Install external package in Node.js');

const server = require('http');
server.createServer((req,resp)=> {
    resp.end("Successfully, Create server");
}).listen(2500);