const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CatagorySchema = new mongoose.Schema({
    CatagoryName :{
        type : String,
        required :true
    },
    Subcatagory: [
        {
        type:Schema.Types.ObjectId,
        ref: 'Subcatagory'   
        }
    ]
});

const Catagory = mongoose.model("Catagory", CatagorySchema)

module.exports = Catagory; 