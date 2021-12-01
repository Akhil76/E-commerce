const asynchandler = require('express-async-handler');
const ImgSliderModel = require('../models/ImgSlider');


const addingslider = asynchandler(async(req,res)=>{
    
    try{
        const {title,link} = req.body;
        const addslider = new ImgSliderModel({
            Title:title,
            Link:link,
            Image:req.file.filename
        });
        await addslider.save();
        res.send("One slider is inserted.");
    }catch{
        res.status(200).json({
            message:"Server error occurred and slider adding failed!"
        });
    }
})

const displayslider = asynchandler(async(req,res)=>{
    try{
        const data = await ImgSliderModel.find();
        // .exec((err,data)=>{
        //     if(err){
        //         res.status(500).json({
        //             err: "There is a server side error!"
        //         });
        //     }else{
        //         res.send(data)
        //     }
        // })  

        // res.status(200).json({
        //     result: data,
        //     message: "Success"
        // });
        res.send(data);
    }catch{
        res.status(200).json({
            message:"Server error occurred!"
        });
    }
});

module.exports = {addingslider,displayslider}; 