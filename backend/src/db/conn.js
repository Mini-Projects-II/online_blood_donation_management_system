
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Blood_donation",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Connection Successfuly")
}).catch((e)=>{
    console.log("Connection failed")
})



