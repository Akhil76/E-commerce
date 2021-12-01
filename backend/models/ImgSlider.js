const mongoose = require('mongoose');

const ImgSliderSchema = new mongoose.Schema({
    Title:{
        type:String,
    },
    Link:{
        type:String,
     },
    Image:{
        type:String,
        required:true
    }
});


const ImgSlider = mongoose.model('ImgSlider',ImgSliderSchema);
module.exports = ImgSlider;