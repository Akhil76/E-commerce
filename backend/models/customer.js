const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customerSchema = new mongoose.Schema({

    FirstName :{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    CartItems:[
        {
            ProductId:{
                type:String,
                required:true
            },
            ProductName:{
                type:String,
            },
            ProductImg:{
                type:String,
            },
            Price:{
                type:Number,
            },
            Date:{
                type: Date,
                default: new Date(),
            },
        }
    ],
    Orders:[
        {
        type:Schema.Types.ObjectId,
        ref:'order'
        }
    ]
});


const customer = mongoose.model("customer", customerSchema)

module.exports = customer; 