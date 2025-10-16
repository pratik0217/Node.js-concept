console.log('Handle form request');

const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((request, response)=> {
    fs.readFile('HTML/part15.html','utf-8',(error,data)=> {
        if(error) {
            response.writeHead(500, {"content-type": "text/plain"});
            response.end('Internal Server Error');
            return;
        }

        if(request.url == '/') {
            response.write(data);
        } else if(request.url == '/submit') {
            let formData = [];
            // getFormData
            request.on('data',(chunk)=> {
                formData.push(chunk);
            })

            // EndEventFormData
            request.on('end',()=> {
                let submitData = Buffer.concat(formData).toString(); // not showing the readable data.
                // console.log(submitData);
                let readableSubmitData = queryString.parse(submitData);
                console.log(readableSubmitData); // showing readable data
            })
            // response.writeHead(200,{"content-type":"text/html"});
            response.write(`<p>Data Submitted!</p>`);
        }
        response.end();
    })
}).listen(4800);