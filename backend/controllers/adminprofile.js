const asynchandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminprofileModel = require('../models/adminModel');


const adminprofile = asynchandler(async(req,res)=>{

  try{
    const {Username,Password}=req.body;    
    const hashedpassword = await bcrypt.hash(Password,10);

    const setadminprofile = new AdminprofileModel({
            Username:Username,
            Password:hashedpassword,
            Image : req.file.filename
        });
       await setadminprofile.save();
       res.status(200).json({
           message:"Successfully admin set."
       });

    }catch{
       res.status(200).json({
           message: "Server error occurred!"
       });
   }

});



//------------Login system-------------------

const login = asynchandler(async(req,res)=>{

  try{
        const {Username,Password} = req.body;

        const admin = await AdminprofileModel.find({Username:Username});

        if(admin && admin.length>0){
            const isValidPassword = await bcrypt.compare(Password,admin[0].Password);

            if(isValidPassword){

            const token = jwt.sign({
                Id: admin[0]._id,
                Username : admin[0].Username
            },process.env.JWT_SECRET,{
                expiresIn: "2m"
            });

            res.status(200).json({
                token: `Bearer ${token}`,
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



module.exports = {adminprofile,login};