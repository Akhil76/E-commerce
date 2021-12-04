const asynchandler = require('express-async-handler');
const Registrationvalidator = require('../validator/RegistrationValidator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const customerModel = require('../models/customer');


const customerRegistration = asynchandler(async(req,res)=>{

    try{

       const{FirstName,
        LastName,
        UserName,
        Phone,
        Email,
        Address,
        Password,
        ComfirmPassword} = req.body;
        
       const validate = Registrationvalidator({FirstName,
                                                LastName,
                                                UserName,
                                                Phone,
                                                Email,
                                                Address,
                                                Password,
                                                ComfirmPassword});
       
       if(!validate.isValid){
           res.status(400).json(validate.error)
       }else{
          const email = await customerModel.findOne({Email});
          if(email){
             return res.status(400).json({
                  Message:'Email alreay exists!'
              })
            }
            const hashedpassword = await bcrypt.hash(Password,10);

            const addCustomer = new customerModel({
                    FirstName:FirstName,
                    LastName:LastName,
                    UserName:UserName,
                    Phone:Phone,
                    Email: Email,
                    Address:Address,
                    Password:hashedpassword,
            });
            await addCustomer.save();
            res.status(200).json({
                    message:"Account is created successfully."
            });
            
            }
    }catch{
           res.status(200).json({
               message: "Server error occurred!"
           });
       }
});


//--------customer login -------------
const customerlogin = asynchandler(async(req,res)=>{

    try{
          const {UserName,Password} = req.body;
  
          const customer = await customerModel.find({UserName:UserName});
  
          if(customer && customer.length>0){
              const isValidPassword = await bcrypt.compare(Password,customer[0].Password);
  
              if(isValidPassword){
  
              const customertoken = jwt.sign({
                  Id: customer[0]._id,
                  UserName : customer[0].UserName,
                  FirstName : customer[0].FirstName,
                  LastName : customer[0].LastName,
                  Email : customer[0].Email,
                  Address : customer[0].Address,
                  CartItems : customer[0].CartItems
              },process.env.JWT_SECRET,{
                  expiresIn: "2h"
              });
  
              res.status(200).json({
                customertoken: `Bearer ${customertoken}`,
                message: "Logged in successfully."
              });
              }else{ 
              res.status(401).json({
                  "error": "Password does not match!"
              });
          }
          }else{
              res.status(401).json({
                  "error": "Username does not match!"
              });
          }
  
    }catch{
      res.status(401).json({
          "error": "Server error occurred!"
      });
    }
  })

//----------end--------------------
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

module.exports = {customerRegistration,customerlogin,addToCart,cartItem};