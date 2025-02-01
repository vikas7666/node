// field => schema 
// model => schema ko use karke mongodb se connect karataa hai
const mongoose = require('mongoose');
const main = async(req,res) =>{
    await mongoose.connect('mongodb://localhost:27017/ecommerce');
    // Created schema 
    const ProductSchema = new mongoose.Schema({
        name :String,
        price :Number,
        brand : String,
        category :String
    })
    // created model and connected with schema  and model
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel(
        {
            name :"m8",
            price:1000,
            category:"mobile",
            brand:'sansui'
        });
    let result  = await data.save();
   // console.log(result)
    const updateInDB = async ( ) =>{
        const Product = mongoose.model('products',ProductSchema);
        let data = await Product.updateOne(
            {name : 'm-44'},
            {$set : {name :'vikas'}},
        )
        console.log(data);
    }


    updateInDB()
}




main()