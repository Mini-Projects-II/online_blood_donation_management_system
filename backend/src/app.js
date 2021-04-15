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



app.get("/donor",async (req,res)=>{
    console.log(req.body.name);
})

app.listen(port, ()=>{
    console.log("Listening to port 8000");
});