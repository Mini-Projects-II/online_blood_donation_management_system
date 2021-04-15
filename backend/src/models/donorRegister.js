const mongoose = require("mongoose")

const donorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parents_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobile_number:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Donorregister = new mongoose.model("Donorregister",donorSchema);

module.exports = Donorregister;