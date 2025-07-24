const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      minLength: 3,
      maxLength: 20,
      required: true
    },
    email: {
      type: String, 
      required: true,
      unique: true
    },
    role: {
      type: String,
      enum: ['user','admin', 'superAdmin'],
      default: 'user'
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    },
    password: { 
      type: String,
      minLength: 12,
      required: true
    }
  } ,  { timestamps: { createdAt: true}}
)

module.exports = mongoose.model('Users', userSchema)