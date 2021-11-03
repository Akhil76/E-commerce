const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    
    Description:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    ProductImg:{
        type:String,
    },
    Date:{
        type: Date,
        default: new Date(),
    },
    Catagory:{
        type:String,
        
    },
    Subcatagory:{
        type:String,
       
    },
    Subcatagory_two:{
        type:String,
       
    },
})

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product;