const mongoose = require('mongoose')
const myproducts = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    brand:{
        type:String,
        require:true
    },
    review:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("products",myproducts)