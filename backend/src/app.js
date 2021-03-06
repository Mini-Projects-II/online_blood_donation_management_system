const express = require('express');
const path = require("path");
const logger = require('morgan');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
require("dotenv").config();
var bodyParser = require('body-parser');
const authenticate = require('./middleware/authenticate');
const port = 8000;
require('./db/conn')
var tkd;
var tkp;
const Donorregister = require("./models/donorRegister");
const Patientregister = require("./models/patientRegister");
const Hospitalregister = require("./models/hospitalregister");
const Donorreqmodel = require("./models/donorReqModel");
const Patientreqmodel = require("./models/PatientRequestModel");


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
        return res.status(200).json({message:"sucessful"});
      }
    }
    catch(e){
      console.log("error");
    }
})

app.post("/donorformdata",async (req,res)=>{
  const {name,per_date,per_time,mobile_number,gender,bloodgroup} = req.body;
  const token = tkd;
  
  try{
    const donorexist = await Donorreqmodel.findOne({mobile_number:mobile_number});
    if(donorexist){
      return res.status(500).json({error:"Request exist"});
    }
    else{
    const donor = new Donorreqmodel({name,per_date,per_time,mobile_number,gender,bloodgroup,token})
        await donor.save();
        return res.status(200).json({message:"sucessful"});
    }
  }
  catch(e){
    console.log(e);
  }
})

app.post("/patientformdata",async (req,res)=>{
  const {name,per_date,per_time,mobile_number,gender,bloodgroup} = req.body;
  const token = tkd;
  
  try{
    const donorexist = await Patientreqmodel.findOne({mobile_number:mobile_number});
    if(donorexist){
      return res.status(500).json({error:"Request exist"});
    }
    else{
    const donor = new Patientreqmodel({name,per_date,per_time,mobile_number,gender,bloodgroup,token})
        await donor.save();
        return res.status(200).json({message:"sucessful"});
    }
  }
  catch(e){
    console.log(e);
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
      return res.status(200).json({message:"sucessful"})
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


var dmn;
app.post("/signinasdonor",async(req,res)=>{
  try{
    let token;
    const {mobile_no,password} = req.body;
    dmn = mobile_no;
    if(!mobile_no || !password){
      return res.status(300).json({error:"Please fill the data"});
    }

    const signindonor = await Donorregister.findOne({mobile_number:mobile_no});
    if(signindonor != null){
    if(signindonor.password !== password){
      return res.status(301).json({error:"Please entered valid details"});
    }
    if(signindonor.password === password){
      token = await signindonor.generateAuthToken();
      console.log(token);
      tkd = token;
      res.cookie("jwtoken",token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });
      return res.status(301).json({message:"welcome"});
    }
    }
  }catch(err){
    console.log(err);
  }
  
}

)

app.post("/signinashospital",async(req,res)=>{
  try{
    const {mobile_no,password} = req.body;
    if(!mobile_no || !password){
      return res.status(300).json({error:"Please fill the data"});
    }

    const signinhospital = await Hospitalregister.findOne({contact_number:mobile_no});
    if(signinhospital != null){
    if(signinhospital.password !== password){
      return res.status(301).json({error:"Please entered valid details"});
    }
    if(signinhospital.password === password){
      return res.status(301).json({message:"welcome"});
    }
    }
  }catch(err){
    console.log(err);
  }
})

var pmn;

app.post("/signinaspatient",async(req,res)=>{
  try{
    var token;
    const {mobile_no,password} = req.body;
    pmn = mobile_no;
    if(!mobile_no || !password){
      return res.status(300).json({error:"Please fill the data"});
    }

    const signinpatient = await Patientregister.findOne({mobile_number:mobile_no});
    if(signinpatient != null){
    if(signinpatient.password !== password){
      return res.status(301).json({error:"Please entered valid details"});
    }
    if(signinpatient.password === password){
      token = await signinpatient.generateAuthToken();
      console.log(token);
      tkp = token;
      res.cookie("jwtoken",token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });
      return res.status(301).json({message:"welcome"});
    }
    }
  }catch(err){
    console.log(err);
  }

}

)
const AuthenticateD = async(req,res,next) => {
  try{
      var token = tkd;
      //const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootDonor = await Donorregister.findOne({"tokens.token":token})
      if(!rootDonor){
          throw new Error("donor not found")
      }
      req.token = token;
      req.rootDonor = rootDonor;
      req.donorID = rootDonor._id;

      next();
  }catch(error){
      console.log(error);
  }
}
const AuthenticateP = async(req,res,next) => {
  try{
      var token = tkp;
      //const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootPatient = await Patientregister.findOne({"tokens.token":token})
      if(!rootPatient){
          throw new Error("Patient not found")
      }
      req.token = token;
      req.rootPatient = rootPatient;
      req.PatientID = rootPatient._id;

      next();
  }catch(error){
      console.log(error);
  }
}

const AuthenticateDF= async(req,res,next) => {
  try{
      var mobile_number= dmn;
      //const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootDonorForm = await Donorreqmodel.findOne({mobile_number:mobile_number})
      if(!rootDonorForm){
          throw new Error("Donor not found")
      }
      req.rootDonorForm = rootDonorForm;
      req.DonorFormID = rootDonorForm._id;

      next();
  }catch(error){
      console.log(error);
  }
}

const AuthenticatePF= async(req,res,next) => {
  try{
      var mobile_number= pmn;
      //const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootPatientForm = await Patientreqmodel.findOne({mobile_number:mobile_number})
      if(!rootPatientForm){
          throw new Error("Patient not found")
      }
      req.rootPatientForm = rootPatientForm;
      req.PatientFormID = rootPatientForm._id;

      next();
  }catch(error){
      console.log(error);
  }
}

app.get("/donordashdata",AuthenticateD, async(req,res)=>{
    res.send(req.rootDonor);
})


app.get("/donorreqformdata",AuthenticateDF, async(req,res)=>{
  res.send(req.rootDonorForm);
})
app.get("/patientreqformdata",AuthenticatePF, async(req,res)=>{
  res.send(req.rootPatientForm);
})
app.get("/patientdashdata",AuthenticateP, async(req, res)=>{
  res.send(req.rootPatient);
})

app.post("/canceld",async (req,res)=>{
  const {name,per_date,per_time,mobile_number1,gender,bloodgroup,status,HN,HA,Room} = req.body;
  try{
   
    await Donorreqmodel.deleteOne({mobile_number:dmn}, function(err){
      if(err){
        console.log(err)
      }

    });
    
    return res.status(200).json({error:"Request Deleted please refresh the pasge"});
    

  }
  catch(e){
    console.log("error");
  }
})

app.post("/cancelp",async (req,res)=>{
  const {name,per_date,per_time,mobile_number1,gender,bloodgroup,status,HN,HA,Room} = req.body;
  try{
  
    await Patientreqmodel.deleteOne({mobile_number:pmn}, function(err){
      if(err){
        console.log(err)
      }

    });
    
    return res.status(200).json({error:"Request Deleted please refresh the pasge"});
    

  }
  catch(e){
    console.log("error");
  }
})

app.get("/patientrequests",async(req,res)=>{
  const requests = await Patientreqmodel.find()
  .then((doc)=>{req.doc = doc;})
  .catch((error)=>console.log(error))
  res.send(req.doc);
})

app.get("/donorrequests",async(req,res)=>{
  const requests = await Donorreqmodel.find()
  .then((doc)=>{req.doc = doc;})
  .catch((error)=>console.log(error))
  res.send(req.doc);
})

app.post("/deletedonor",async (req,res)=>{
  const {din}= req.body;
  console.log(din);
  
  try{      
    const user = await Donorreqmodel.findOne({mobile_number:din})
    if(user){
       await Donorreqmodel.deleteOne({mobile_number:din}, function(err){
        if(err){
          console.log(err)
        }
        
  
      });
      return res.status(200).json({error:"Request Deleted please refresh the pasge"});


    }
    else{
      return res.status(500).json({error:"user not found"});


    }
    
    
    

  }
  catch(e){
    console.log("error");
  }
})
app.post("/deletepatient",async (req,res)=>{
  const {din}= req.body;
  console.log(din);
  
  try{      
    const user = await Patientreqmodel.findOne({mobile_number:din})
    if(user){
       await Patientreqmodel.deleteOne({mobile_number:din}, function(err){
        if(err){
          console.log(err)
        }
        
  
      });
      return res.status(200).json({error:"Request Deleted please refresh the pasge"});


    }
    else{
      return res.status(500).json({error:"user not found"});


    }
    
    
    

  }
  catch(e){
    console.log("error");
  }
})

app.post("/acceptdonor",async (req,res)=>{
  const {uin}= req.body;
  console.log(uin);
  
  try{      
    const user = await Donorreqmodel.findOne({mobile_number:uin})
    if(user){
      await Donorreqmodel.updateMany({mobile_number:uin}, { $set: { status: 'Accepted' } });
      return res.status(200).json({error:"Request Accepted please refresh the pasge"});


    }
    else{
      return res.status(500).json({error:"user not found"});


    }
    
    
    

  }
  catch(e){
    console.log("error");
  }
})

app.post("/acceptpatient",async (req,res)=>{
  const {uin}= req.body;
  console.log(uin);
  
  try{      
    const user = await Patientreqmodel.findOne({mobile_number:uin})
    if(user){
      await Patientreqmodel.updateMany({mobile_number:uin}, { $set: { status: 'Accepted' } });
      return res.status(200).json({error:"Request Accepted please refresh the pasge"});


    }
    else{
      return res.status(500).json({error:"user not found"});


    }
    
    
    

  }
  catch(e){
    console.log("error");
  }
})


app.listen(port, ()=>{
    console.log("Listening to port 8000");
});

