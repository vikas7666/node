// What is http 
// http request and response ko handle karata hai 
const http =  require('http');


// req suppose we want from url parameter 
// resp jo hum yahaa se send karate hai 
// http.createServer((req, resp) =>{
// //  resp.write('Hello This is vikas');
//  resp.write('<h1>Hello Vikas</h1>');
//  resp.end();
// }).listen(4500);

// createServer ye pure function ko ek parameter jaise leta hai
// function as parameter

//es5
/* function functionASAparameter(req,resp){
    resp.write('Hello Vikas1');
    resp.end()
} */
// es6 
const dataControl = (re,resp) =>{
    resp.write('Hello Vikas2');
    resp.end()
}

//  http.createServer(functionASAparameter).listen(4500)
 http.createServer(dataControl).listen(4500)

