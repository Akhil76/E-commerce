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
            console.log(addCustomer);
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
        const customerId= req.params.id; //req.params.customerId
        const {ProductId,ProductName,ProductImg,Price} = req.body;
        // CartItem Object----------------------------------------------------
        const CartItems = {
            ProductId,
            ProductName,
            ProductImg,
            Price
        };
        await customerModel.updateOne({
            _id:customerId
        },{
            $push:{
                CartItems:CartItems
            }
        });
        res.send("One product is added to cart successfully.");
    }catch{
        res.status(200).json({
            message: "Server error occurred!"
        });
    }
});

const cartItemDisplay = asynchandler(async(req,res)=>{

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

const delcartItem = asynchandler(async(req,res)=>{
    
    try{
        const customerId = req.params.id;
        const {itemid,ProductId} = req.body; //---filtered by only itemid of cart item.
        const result = await customerModel.updateOne({
            _id:customerId
        },{
            $pull:{
                CartItems:{_id:itemid}
            }
        });
        res.send("One product is deleted from your cart successfully.");
        
    }catch{
        res.status(200).json({
            message: "Server error occurred to delete cart item!"
        });
    }

})

module.exports = {customerRegistration,customerlogin,addToCart,cartItemDisplay,delcartItem};