console.log("Understand Client Request");

const http = require("http");
http
  .createServer((req, resp) => {
    resp.setHeader('content-type','text/html')
    console.log(req.url);
    if (req.url == "/") {
      resp.write("<h1>Home Page</h1>");
    } else if (req.url == "/about") {
      resp.write("<h1>About Page</h1>");
    } else if (req.url == "/login") {
      resp.write("<h1>Login Page</h1>");
    } else {
      resp.write("<h1>not exist Page</h1>");
    }
    resp.end();
  })
  .listen(2500);
