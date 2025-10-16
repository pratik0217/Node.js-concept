
console.log('Send HTML file in response FS Module');

const http = require('http');
const fs = require('fs');

http.createServer((req, resp)=> {
    fs.readFile('HTML/part14.html', 'utf-8', (error, data)=> {
        if(error) {
            resp.writeHead(500, {'content-type':'text/plain'});
            resp.writable("Internal server error");
            resp.end();
        }

        resp.writeHead(200, {'content-type':'text/html'});
            resp.write(data);
            resp.end();
             
    })
}).listen(4800);
