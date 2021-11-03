const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new mongoose.Schema({
    ProductId:[
        {
            type:Schema.Types.ObjectId,
            ref:'Product'
        }
    ],
    Quantity:{
        type:Number,
    },
    TotalPrice:{
        type: Number,
    }
});

const order = mongoose.model("order", orderSchema)

module.exports = order; 