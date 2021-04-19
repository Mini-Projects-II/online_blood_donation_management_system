const mongoose = require("mongoose")
require('dotenv').config()
const donorreqSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    per_date:{
        type:String,
        required:true
    },
    per_time:{
        type:String,
        required:true
    },
    mobile_number:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
  
    status:{
        type:Boolean,
        default:false

    }

    

})
const Donorreqmodel = new mongoose.model("Donorreqmodel",donorreqSchema);

module.exports = Donorreqmodel;