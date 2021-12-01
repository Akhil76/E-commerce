const asynchandler = require('express-async-handler');
const CatagoryModel = require('../models/CatagoryModel');
//"Subcatagory subcatagory_two"

const displaycatagory = asynchandler(async(req,res)=>{
   CatagoryModel.find()
    .populate({
        path:"Subcatagory",
        populate:{
            path:"Subcatagory_two"
        }
    })
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






module.exports = displaycatagory;