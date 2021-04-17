const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
require('dotenv').config()
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
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
donorSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY).toString(); 
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}
const Donorregister = new mongoose.model("Donorregister",donorSchema);

module.exports = Donorregister;