const mongoose = require('mongoose');

const cartSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    quantity:{
        type:Number,
        min:1,
        required:true
    }
},{timestamps:true})
const CartModel=mongoose.model("trackings",cartSchema)
module.exports=CartModel