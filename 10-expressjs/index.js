const express = require('express');
const app = express();

/* 
    get method me first paramater jata hai route and one callback function which contain req, and resp

    req => We use when we want some input from browser by default server return even if we not use req method
    res => server send 

    ? we denotes as query parameter
*/



app.get('',(req,res) =>{
    console.log("req sent by browser using query param?", req.query)
    console.log("req sent by browser using query param?", req.query.name)
    //req sent by browser using query param? { name: '"vikas"', surname: '"shukla"' }
    // req sent by browser using query param? "vikas"
    res.send('hello Vikas here');
});

app.get('/about',(req,res) =>{
    res.send('About us page')
})
app.listen(5000)
