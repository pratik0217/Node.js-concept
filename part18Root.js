console.log('Create file with Requested Data');

const http = require('http');
const userForm = require('./part18UserForm');
const userDataSubmit = require('./part18UserDataSubmit');
const queryString = require('querystring');

http.createServer((request, response) => {
    response.writeHead(200, {"content-type":"text/html"})
    if(request.url=='/') {
        userForm(request, response);
    } else if(request.url=='/submit') {
        let userFormData = [];
        request.on('data', (chunk)=> {
            userFormData.push(chunk);
        })

        request.on('end', ()=> {
            let userFromDataSubmit = Buffer.concat(userFormData).toString();
            let readableSubmitData = queryString.parse(userFromDataSubmit);
            console.log(readableSubmitData);
        })
        userDataSubmit(request, response);
    }
    response.end();
}).listen(4800);