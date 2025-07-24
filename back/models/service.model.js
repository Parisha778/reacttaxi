const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema(
  {
    service: {
      type: String,
      minLength: 5,
      maxLength: 60,
      required: true
    },
    prix: {
      type: float, 
      required: true,
      unique: true
    },
    
  } 
)

module.exports = mongoose.model('Services', serviceSchema)