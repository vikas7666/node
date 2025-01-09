const express = require('express');
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'public');

// here express is function and static is used for load html files
// app.use(express.static(publicPath))

// Remove extension from URL and 404 Page extension means .html we don't want to shwo users

// we have used sendFile in place of send 
app.get('',(_,res) =>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,res) =>{
    res.sendFile(`${publicPath}/about.html`)
})

// for handling all the other page 
app.get('*',(_,res) =>{
    res.sendFile(`${publicPath}/help.html`)
})


app.listen(5000)