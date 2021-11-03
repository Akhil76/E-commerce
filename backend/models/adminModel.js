const mongoose = require('mongoose');

const adminprofileSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
     },
    Image:{
        type:String
    }
});


const adminprofile = mongoose.model('adminprofile',adminprofileSchema);
module.exports = adminprofile;