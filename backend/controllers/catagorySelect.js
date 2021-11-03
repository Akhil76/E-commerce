const asynchandler = require('express-async-handler');
const CatagoryModel = require('../models/CatagoryModel');
const SubcatagoryModel = require('../models/SubcatagoryModel');
const SubcatagoryTwoModel = require('../models/SubCat_two_Model');


const mainCatagory = asynchandler(async(req,res)=>{
    CatagoryModel.find()
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

const subcatagory = asynchandler(async(req,res)=>{

   const _id = req.params.catagoryId;
    
    SubcatagoryModel.find({Catagory:_id})
    .exec((err,data)=>{
        if(err){
            res.status(500).json({
                err:"There is a server side error!",
            });
        }else{
            res.send(data)
        }
    })
})

const subcatagoryTwo = asynchandler(async(req,res)=>{

    const _id = req.params.subcatagoryId;

    SubcatagoryTwoModel.find({Subcatagory_two:_id})
    .exec((err,data)=>{
        if(err){
            res.status(500).json({
                err:"There is a server side error!",
            });
        }else{
            res.send(data)
        }
    })
})

module.exports = {mainCatagory,subcatagory,subcatagoryTwo};