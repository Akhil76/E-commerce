const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SubcatagorySchema = new mongoose.Schema({
    
    SubcatagoryName :{
        type : String,
        required :true
    },
    Catagory:{
        type:Schema.Types.ObjectId,
        ref:'Catagory',
        required:true

    },
    Subcatagory_two: [
        {
        type:Schema.Types.ObjectId,
        ref: 'Subcatagory_two'   
        }
    ]

});

const Subcatagory = mongoose.model("Subcatagory", SubcatagorySchema)

module.exports = Subcatagory; 