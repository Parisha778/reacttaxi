const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    prenom: {
      type: String,
      minLength: 3,
      maxLength: 20,
      required: true
    },
    nom: {
      type: String, 
      required: true,
      unique: true
    },
    detailDeCourse: {
      type: String,
      required: true,
    },
    dateHeure: {
      type: String,
      default: false
    },
    montantEffectue: {
      type: String,
      required: true,
    },
    email: { 
      type: String,
      minLength: 5,
      required: true
    }
  } ,  { timestamps: { createdAt: true}}
)

module.exports = mongoose.model('Course', courseSchema)