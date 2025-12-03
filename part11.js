console.log('Make Simple API');

const userData = [
    {
        name:"Pratik Nandkumar Jadhav",
        collegeName : "DY Patil School of Engineering & Technology, Pune",
        department:"Computer Science Engineering",
        phoneNumber:7038302915
    },{
        name:"Suyash Rajendra Awate",
        collegeName : "DY Patil School of Engineering & Technology, Pune",
        department:"Computer Science Engineering",
        phoneNumber:8767453425
    },{
        name:"Prajyot Sandeep Patil",
        collegeName : "DY Patil School of Engineering & Technology, Pune",
        department:"Computer Science Engineering",
        phoneNumber:7709158841
    }
]

const http = require('http');

http.createServer((req,resp)=> {
    resp.setHeader('content-type','application/json');

    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(2500);