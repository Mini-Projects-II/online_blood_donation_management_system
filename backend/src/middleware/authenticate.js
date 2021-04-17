const jwt = require('jsonwebtoken');
const Donor = require('../middleware/authenticate');
const Donorregister = require("../models/donorRegister");
const Authenticate = async(req,res,next) => {
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootDonor = await Donorregister.findOne({_id:verifyToken._id,"tokens.token":token})
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
module.exports = Authenticate