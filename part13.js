console.log("Dynamic Port");

const arg = process.argv;
const dynamicPort = arg[2];

const http = require("http");
http.createServer((req, resp) => {
    resp.write("Dynamic port");
    resp.end();
}).listen(dynamicPort);
