const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Subcatagory_twoSchema = new mongoose.Schema({
    
    Subcatagory_twoName :{
        type : String,
        required :true
    },
    
    Subcatagory_two:{
        type:Schema.Types.ObjectId,
        ref: 'Subcatagory_two',
        required:true   
        }
    

});

const Subcatagory_two = mongoose.model("Subcatagory_two", Subcatagory_twoSchema)

module.exports = Subcatagory_two; 