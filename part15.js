console.log("Make and Submit form");

const http = require("http");
const fs = require("fs");

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
            response.write("<h1>Data Submitted..!</h1>");
        }
        response.end();
    })
  }).listen(4800);


  // http
//   .createServer((req, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     console.log(req.url);

//     if (req.url == "/") {
//       response.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="Enter Name" name="name" />
//         <input type="number" placeholder="Enter Number" name="number" />
//         <input type="email" placeholder="Enter Email" name="email" />
//         <button>Submit</button>
//         </form>
//         `);
//     } else if(req.url == "/submit") {
//         response.write(`<h1>Data Submitted</h1>`);
//     }
//     response.end();
//   })
//   .listen(4800);