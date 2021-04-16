const mongoose = require("mongoose")

const hospitalSchema = new mongoose.Schema({
    hospital_name:{
        type:String,
        required:true
    },
    owner_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true
    },
    contact_number:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Hospitalregister = new mongoose.model("Hospitalregister",hospitalSchema);

module.exports = Hospitalregister;