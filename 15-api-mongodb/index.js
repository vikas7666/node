/* 
    Basically we have 4 types of api such as get post delete put => put means update
*/

const express  =  require('express');
const app = express();
let dbConnect  =  require('./database');

let dbconnect1 = async() =>{
    let db = await dbConnect();
    let result = await db.find().toArray();
    console.log(result);
    return result; 
}   

app.get('/',async(req,res) =>{
    let data = await dbconnect1(); // Await the result of dbconnect1
    res.send(data);
})


// make separte code 
// app.get('',async(req,res) =>{
//     let db = await dbConnect();
//     let result = await db.find().toArray();
//     result.forEach((item) =>{
//         res.send(`<li>${item.name}</li>`)
//     })
    
// })


/* 
    can we pass get method inside body => NO

*/

app.listen(3000)