const jwt = require('jsonwebtoken');
const ENV = require('../config/env')
const createError  = require ('./error')

const verifieToken = (req, res, next) => {
  
  const token = req.cookies.access_token;

 
  if(!token) return next(createError(401, "Acces Denied"))

 
  jwt.verify(token, ENV.TOKEN_SIGNATURE, (err, user) => {
    
    if(err) {
     
      return next(createError(403, "Token non valide !"))
    }
    req.user = user

    next();
  })
}

module.exports = verifieToken;