const express = require('express');
const path = require("path");
const app = express();
const port = 8000;
require('./db/conn')

app.use(express.static())
app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen(port, ()=>{
    console.log("Listening to port 8000");
});