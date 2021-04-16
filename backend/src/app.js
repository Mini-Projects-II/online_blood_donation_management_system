const express = require('express');
const path = require("path");
const logger = require('morgan');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
const port = 8000;
require('./db/conn')
const Donorregister = require("./models/donorRegister");
const Patientregister = require("./models/patientRegister");
const Hospitalregister = require("./models/hospitalregister");
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  res.send("Home");
})

app.post("/donor",async (req,res)=>{
    const {name,parents_name,address,mobile_number,gender,bloodgroup,password} = req.body;
    try{
      const donorexist = await Donorregister.findOne({mobile_number:mobile_number});
      if(donorexist){
        return res.status(500).json({error:"Phone number already exists"});
      }
      else{
        const donor = new Donorregister({name,parents_name,address,mobile_number,gender,bloodgroup,password});
        await donor.save();
      }
    }
    catch(e){
      console.log("error");
    }
})


app.post("/patient",async (req,res)=>{
  const {name,parents_name,address,mobile_number,gender,bloodgroup,password} = req.body;
  try{
    const patientexist = await Patientregister.findOne({mobile_number:mobile_number});
    if(patientexist){
      return res.status(500).json({error:"Phone number already exists"});
    }
    else{
      const patient = new Patientregister({name,parents_name,address,mobile_number,gender,bloodgroup,password});
      await patient.save();
    }
  }
  catch(e){
    console.log("error");
  }
})

app.post("/hospital",async (req,res)=>{
  const {hospital_name,owner_name,address,district,state,contact_number,password} = req.body;
  try{
    const hospitalexist = await Hospitalregister.findOne({contact_number:contact_number});
    if(hospitalexist){
      return res.status(500).json({error:"Phone number already exists"});
    }
    else{
      const hospital = new Hospitalregister({hospital_name,owner_name,address,district,state,contact_number,password});
      await hospital.save();
    }
  }
  catch(e){
    console.log("error");
  }
})

app.listen(port, ()=>{
    console.log("Listening to port 8000");
});