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
        type:String,
        default:"Pending"

    },
    HN:{
        type:String,
        default:"City Hospital"
    },
    HA:{
        type:String,
        default:"Mathura, UttarPradesh"
    },
    Room:{
        type:String,
        default:"205"
    }

    

})
const Donorreqmodel = new mongoose.model("Donorreqmodel",donorreqSchema);

module.exports = Donorreqmodel;