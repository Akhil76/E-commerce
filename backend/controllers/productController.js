const asynchandler = require('express-async-handler');
const ProductModel = require('../models/ProductModel');


const addProduct = asynchandler(async(req,res)=>{

  
   try{
    //const {ProductName,Description,Quantity,Price}= req.body;

   // These three names are different from frontend names
   const Catagory = req.body.catagoryId;
   const Subcatagory = req.body.subcatagoryId;
   const Subcatagory_two = req.body.subcatagorytwoId;
   //---------------------------------------------------
   const ProductImg = req.file.filename;

   const addProduct = new ProductModel({
        ProductName:req.body.ProductName,
        Description:req.body.Description,
        Quantity:req.body.Quantity,
        Price:req.body.Price,
        ProductImg,   
        Catagory,
        Subcatagory,
        Subcatagory_two,
    
   })
       await addProduct.save();
       res.send("Product is inserted.");
   }catch{
    res.status(401).json({
        "error": "Server error occurred!"
    });
   }
});


const editproduct = asynchandler(async(req,res)=>{
    try{
        const editedProduct = await ProductModel.findByIdAndUpdate(
            {_id:id},
            {},
            {new:true}
        );
        res.json(editedProduct);
    }catch{
        res.status(200).json({
            message:"Server error occurred and deleting failed!"
        })
    }
});

//Displaying products------------------------------
const allproducts = asynchandler(async(req,res)=>{

try{
    ProductModel.find()
    .sort({ _id: -1 }) // for displaying latest post at first 
    .exec((err,data)=>{
        if(err){
            res.status(500).json({
                err: "There is a server side error!"
            });
        }else{
            res.send(data)
        }
    })  

  }catch{
    res.status(401).json({
        "error": "Server error occurred!"
    });
  }
    
});

// Displaying single product in details ------------
const single_product = asynchandler(async(req,res)=>{
    try{
        const id = req.params.id;
        ProductModel.find({_id:id}) 
        .exec((err,data)=>{
            if(err){
                res.status(500).json({
                    err: "There is a server side error!"
                });
            }else{
                res.send(data)
            }
        })  
    
      }catch{
        res.status(401).json({
            "error": "Server error occurred!"
        });
      }
});

// Displaying products according to main category-----------------
const productBymainCatagory = asynchandler(async(req,res)=>{

    const _id = req.params.catId;

    ProductModel.find({Catagory:_id}) 
    .sort({ _id: -1 })  // for displaying latest post at first
    .exec((err,data)=>{
        if(err){
            res.status(500).json({
                err: "There was a server side error!",
            });
        }else{
            res.send(data)
        }
    });
});

// Displaying products according to sub category-----------------
const productBysubCatagory = asynchandler(async(req,res)=>{

    const _id = req.params.subcatId;

    ProductModel.find({Subcatagory:_id})
    .sort({ _id: -1 })  // for displaying latest post at first
    .exec((err,data)=>{
        if(err){
            res.status(500).json({
                err: "There was a server side error!",
            });
        }else{
            res.send(data)
        }
    });
});


// Displaying products according to child category----------

const productbyChildCat = asynchandler(async(req,res)=>{

    const _id = req.params.productId;

    ProductModel.find({Subcatagory_two:_id})
    .sort({ _id: -1 })  // for displaying latest post at first
    .exec((err,data)=>{
        if(err){
            res.status(500).json({
                err: "There was a server side error!",
            });
        }else{
            res.send(data)
        }
    });
});

module.exports = {addProduct,editproduct,allproducts,productBymainCatagory,productBysubCatagory,productbyChildCat,single_product};