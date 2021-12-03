const asynchandler = require('express-async-handler');
const ProductModel = require('../models/ProductModel');
const fs = require('fs');


const addProduct = asynchandler(async(req,res)=>{

   try{
    const {ProductName,Description,Quantity,Price}= req.body;

    // These three names are different from frontend names------
    const Catagory = req.body.catagoryId;
    const Subcatagory = req.body.subcatagoryId;
    const Subcatagory_two = req.body.subcatagorytwoId;
    //-----For uploading img------------------------------------
    const ProductImg = req.file.filename;

    const addProduct = new ProductModel({
            ProductName,
            Description,
            Quantity,
            Price,
            ProductImg,   
            Catagory,
            Subcatagory,
            Subcatagory_two,
        
   })
       await addProduct.save();
       res.send("Product is inserted.");
   }catch{
    res.status(200).json({
        message:"Server error occurred and product adding failed!"
    });
   }
});

// -------Editting products-----------------------------
const editproduct = asynchandler(async(req,res)=>{
    try{
        //update from frontend-----------------------------------
        const id = req.params.id;
        const {ProductName,Description,Quantity,Price,Catagory,Subcatagory,Subcatagory_two} = req.body;

        const updatedProduct ={
            ProductName,
            Description,
            Quantity,
            Price,
            Catagory,
            Subcatagory,
            Subcatagory_two,
        };
       
        if(req.file){
            const ProductImg = req.file.filename;
            updatedProduct.ProductImg = ProductImg;
        }
        
        const editedProduct = await ProductModel.findByIdAndUpdate(
            {_id:id},
            {$set:updatedProduct}
        );
         //--------replacing img file------------------
         const path = '../frontend/public/uploads/';
         const fileNameWithPath = path+editedProduct.ProductImg;
         if(req.file){ //If there is no img file, fs.unlink will not work
             fs.unlink(fileNameWithPath, (err) => {
                 //console.log(err);
               });
         }
         //------------------------------------------
        res.json(editedProduct);
    }catch{
        res.status(200).json({
            message:"Server error occurred and deleting failed!"
        })
    }
});

//-----------Deleting product-----------------------------

const delproduct = asynchandler(async(req,res)=>{
   
    try{
        
        const id = req.params.id;
        const deletedProduct = await ProductModel.findByIdAndRemove(id) .exec();
       
        //--------Deleting img file------------------
        const path = '../frontend/public/uploads/';
        const fileNameWithPath = path+deletedProduct.ProductImg;
        if(deletedProduct.ProductImg){ //If there is no img file, fs.unlink will not work
            fs.unlink(fileNameWithPath, (err) => {
                console.log(err);
              });
        }
        //------------------------------------------
        res.send('Product is successfully deleted.');
    }catch{
        res.status(401).json({
            "error": "Server error occurred!"
        }); 
    }
})
//Displaying products------------------------------
const allproducts = asynchandler(async(req,res)=>{

try{
    const pro = ProductModel.find()
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

module.exports = {addProduct,editproduct,delproduct,allproducts,productBymainCatagory,productBysubCatagory,productbyChildCat,single_product};