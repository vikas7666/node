const http = require('http');
const data = require('./data')

// if koi request lenaa hai then resp use karate hai 
http.createServer((req,resp) =>{
resp.writeHead(200, {'Content-Type' : 'application/json'});

// suppose we want data in diffrent file 
resp.write(JSON.stringify(data))
    resp.end();
}).listen(4000)