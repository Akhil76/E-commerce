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
            message:"Server error occurred and product adding failed!"
        });
    }
})


module.exports = addingslider; 