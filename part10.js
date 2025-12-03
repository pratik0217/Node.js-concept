console.log('Understanding Server response');

const topicNumber = 10;

const http = require('http');
http.createServer((req, resp)=> {
    resp.setHeader('content-text','text/html');
    resp.write("<h1>Understanding Server Response</h1>");
    resp.write(`<p>Topic part : ${topicNumber}</p>`);
    resp.end()
}).listen(2500);