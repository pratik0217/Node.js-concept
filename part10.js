console.log('Understanding Server response');

const http = require('http');

let topicName = "10 | Understand Server Response";

const server = http.createServer((request, response)=> {
    response.setHeader("Content-Type","text/html"); // force to content show in html format(webpage).

    response.write("<h1>Understanding Server Respnose</h1>");
    response.write("<p>Client request to send the server and respnose back to client it request that is callend Understanding server response.</p>");
    response.write(`<p>Part : ${topicName} </p>`) // variable data pass in literal through.
    response.write(`<p><strong>Realtime Date : ${Date()}</strong></p>`) // function data pass in literal through.

    response.end(); // end the response.
    process.exit(); // end the process of server.
});
 
server.listen(4800); 