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
        res.send(data);
    }catch{
        res.status(200).json({
            message:"Server error occurred!"
        });
    }
});

//-----------Editing Slider-----------------------
const editslider = asynchandler(async(req,res)=>{
    try{
        //update from frontend-----------------------------------
        const id = req.params.id;
        const {Title,Link} = req.body;

        const updatedSlider ={
           Title,
           Link
        };
        if(req.file){
            const Image = req.file.filename;
            updatedSlider.Image = Image;
        }
        
        const editedSlider= await ImgSliderModel.findByIdAndUpdate(
            {_id:id},
            {$set:updatedSlider}
        );
         //--------replacing img file------------------
       
         const path = './uploadedfiles/';
         const fileNameWithPath = path+editedSlider.Image;
         if(req.file){ //If there is no img file, fs.unlink will not work
             fs.unlink(fileNameWithPath, (err) => {
                 //console.log(err);
               });
         }
         //------------------------------------------
        res.json(editedSlider);
    }catch{
        res.status(200).json({
            message:"Server error occurred and updating failed!"
        })
    }
});

//-----------Deleting slider----------------
const delslider = asynchandler(async(req,res)=>{
   
    try{
        
        const id = req.params.id;
        const deletedslider = await ImgSliderModel.findByIdAndRemove(id) .exec();
       
        //--------Deleting img file------------------
        const path = './uploadedfiles/';
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

//-------------------------------------------------------------------------------

module.exports = {addingslider,displayslider,delslider,editslider}; 