const asynchandler = require('express-async-handler');
const fs = require('fs');
const ImgSliderModel = require('../models/ImgSlider');


const addingslider = asynchandler(async(req,res)=>{
    
    try{
        const {Title,Link} = req.body;
        const addslider = new ImgSliderModel({
            Title,
            Link,
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

//-----------Deleting slider----------------
const delslider = asynchandler(async(req,res)=>{
   
    try{
        
        const id = req.params.id;
        const deletedslider = await ImgSliderModel.findByIdAndRemove(id) .exec();
       
        //--------Deleting img file------------------
        const path = '../frontend/public/uploads/';
        const fileNameWithPath = path+deletedslider.Image;
        if(deletedslider.Image){ //If there is no img file, fs.unlink will not work
            fs.unlink(fileNameWithPath, (err) => {
                console.log(err);
              });
        }
        //------------------------------------------
        res.send('Slider is successfully deleted.');
    }catch{
        res.status(401).json({
            "error": "Server error occurred!"
        }); 
    }
})

//------------------------------------------

module.exports = {addingslider,displayslider,delslider}; 