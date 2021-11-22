const asynchandler = require('express-async-handler');
const ProductModel = require('../models/ProductModel');


const SearchProduct = asynchandler(async(req,res)=>{
    try{
        const ProductName = req.params.productName;
        let regexp = new RegExp(ProductName,"i");
    
        ProductModel.find({ProductName:regexp})
        .exec((err,data)=>{
            if(err){
                res.status(500).json({
                    err: "There is a server side error!"
                });
            }else{
                res.send(data)
            }
        });  
    }catch{
        res.status(401).json({
            "error": "Server error occurred!"
        });
    }
});


module.exports = SearchProduct;
