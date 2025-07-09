const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ENV = require('../config/env')
const UsersModel = require('../models/user.model');
const userModel = require('../models/user.model');



const register = async ( req , res )=>{
  try {
    const passewordHashed = await bcrypt.hash(req.body.password, 10);

    const user = await UsersModel.create({
      ...req.body,
      password : passewordHashed
    })
 

    res.status(201).json({
      message :"User created !",
      user
    })
    
  } catch (error) {
    console.log(error.message);
    
  }
}
const sign = async(req,res)=>{
  try {

  
  const user = await userModel.findOne({email:req.body.email});

     
  if( !user) return res.status(404).json("User not found !")

       
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
      );
		
    if(!comparePassword ) return res.status(400).json("Wrong Credentials!");

    
    const token = jwt.sign(

      
		{ id: user._id}, 
    
    ENV.TOKEN_SIGNATURE, 
	  
    {expiresIn: "24h"}
	
    )          
    const { password, ...others } = user._doc

    
		res.cookie('access_token', token, { 
      httpOnly: true,
      secure: false, 
      sameSite: 'strict', 
      maxAge: 24 * 60 * 60 * 1000 
    })
    res.status(200).json(others) 
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const get_all_users = async (req,res)=>{
  try {
    const users = await userModel.find();
    res.status(200).json(users);

  } catch (error) {
    console.log(500).json(error.message);
    
  }
}

module.exports = {
  register,
  sign,
  get_all_users
}