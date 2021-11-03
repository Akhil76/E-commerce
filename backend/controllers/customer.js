const asynchandler = require('express-async-handler');
const customerModel = require('../models/customer');


const customer = asynchandler(async(req,res)=>{

    try{
       const{FirstName,LastName,Phone,Email,Address,UserName,Password} = req.body;

       const addCustomer = new customerModel({
            FirstName:FirstName,
            LastName:LastName,
            Phone:Phone,
            Email: Email,
            Address:Address,
            UserName:UserName,
            Password:Password,
       });
       await addCustomer.save();

       res.status(200).json({
            message:"Account is created successfully."
       });
    }catch{
           res.status(200).json({
               message: "Server error occurred!"
           });
       }
});

const addToCart = asynchandler(async(req,res)=>{
    try{
        const customerId = "616056824fa95811a82585bd"; //req.params.customerId
        // CartItem Object----------------------------------------------------
        const CartItems = {
            ProductId:"614b48a96ac1600c207d5ad5",
            ProductName:"Dell i9 Laptop d88",
            ProductImg:"1632323753306.jpg",
            Price:"55000"
        };
        await customerModel.updateOne({
            _id:customerId
        },{
            $push:{
                CartItems:CartItems
            }
        });
        res.send("One item is added to cart successfully.");
    }catch{
        res.status(200).json({
            message: "Server error occurred!"
        });
    }
});

const cartItem = asynchandler(async(req,res)=>{

    const customerId = req.params.customerid;
    
    customerModel.find({_id:customerId})
    .exec((err,data)=>{
        if(err){
            res.status(500).json({
                err:"There is a server side error!",
            });
        }else{
            res.send(data)
        }
    })
});

module.exports = {customer,addToCart,cartItem};