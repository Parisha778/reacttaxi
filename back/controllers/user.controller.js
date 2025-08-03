const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ENV = require('../config/env')
const UsersModel = require('./models/user.model');

const register = async (req, res) => {
 
  try {
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    
    const user = await UsersModel.create({ 
      //
      ...req.body,
      password: hashedPassword
     });
     //Si l'utilisateur est créé avec succès ,nous envoyons un status 201
    return res.status(201).json("User has been created!", user);
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const sign = async(req,res)=>{
  try {
  const user = await UsersModel.findOne({email:req.body.email});
     
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
// Fonction pour récupéer tous les users
const getAllUsers = async (req,res)=>{
  try {
    //Récupérer tous les users depuis la base de données
    const users = await UsersModel.find();
    res.status(200).json(users);

  } catch (error) {
    console.log(500).json(error.message);
    
  }
}

const getUserById = async (req, res) => {
  try{
      // On récupe un utilisateurs de base de données 'Model.findById(req.params.id)'
      //chercher un utilisateur avec l'ID
      const result = await UsersModel.findById(req.params.id);
         
      if(!user) return res.status(404).json("User not found !")
      return res.status(200).json(user)

  }catch(error){  
      return res.status(500).json(error.message)
  }
}

const deleteUser = async (req, res, next) => {
  try{   
    // Rechercher l'utisateur par son ID
    const user = await UsersModel.findById(req.params.id);
    // Vérifier si l'utilisateur existe
    if (!user) return res.status(404).json("User not found.")
    
    await Model.findOneAndDelete(req.params.id)

    return res.status(200).json(`The User with the id ${req.params.id} has been deleted.`)
  }catch(error){

    return res.status(500).json(error.message)
  }
} 


const updateUser = async (req, res, next) => {
  try{
    
    const user = await UsersModel.findById(req.params.id);
    
    if(!user) return res.status(404).json("user not found !");
    const userUpdated = await Model.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json({
      message: "User updated",
      userUpdated
    })

  }catch(error){
    return res.status(500).json(error.message)
  }
}


module.exports = {
  register,
  sign,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
}