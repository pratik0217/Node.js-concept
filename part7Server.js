console.log('Create Server in Node.js');

const http = require('http');
http.createServer((request, response)=> {
    response.write("Create server");
    response.end();
}).listen(4800);