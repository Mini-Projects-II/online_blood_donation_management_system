const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
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

const Patientregister = new mongoose.model("Patientregister",patientSchema);

module.exports = Patientregister;