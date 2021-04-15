const express = require('express');
const path = require("path");
const logger = require('morgan');
const cors = require('cors');
const app = express();
const port = 8000;
require('./db/conn')
const Donorregister = require("./models/donorRegister")

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
  res.send("Home");
})

app.post("/donor",async (req,res)=>{
    const {name,parents_name,address,mobile_number,gender,bloodgroup,password} = req.body;
    try{
      const donorexist = await Donorregister.findOne({mobile_number:mobile_number});
      if(donorexist){
        return res.status(422).json({error:"Email already exists"});
      }
      else{
        const donor =new Donorregister({name,parents_name,address,mobile_number,gender,bloodgroup,password});
        await donor.save();
        res.status(201).json({message:"Registration successful"});
      }
    }
    catch(e){
      console.log("error");
    }
})

app.listen(port, ()=>{
    console.log("Listening to port 8000");
});