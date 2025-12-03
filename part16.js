console.log('Handle form request');

const http = require("http");
const fs = require("fs");
const queryString = require('querystring');

// including htmlfile
http.createServer((req, response) => {
    fs.readFile('HTML/part15.html','utf-8', (error,data)=> {
        if(error) {
            response.writeHead(500, {"content-type":"text/plain"});
            response.end("internal server error");
        }
        
        response.writeHead(200, {"content-type":"text/html"});
        if(req.url == '/') {
            response.write(data);
        } else if(req.url == '/submit') {
            // getData event
            let formData = [];
            req.on('data',(chunk)=> {
                formData.push(chunk);
            })

            // endData event
            req.on('end',()=> {
                let submitData = Buffer.concat(formData).toString();
                // console.log(submitData) // not readable format data.
                let readableSubmitData = queryString.parse(submitData);
                console.log(readableSubmitData);
            })
            response.write("<h1>Data Submitted..!</h1>");
        }
        response.end();
    })
  }).listen(4800);