const mongoose = require('mongoose');

const usersShema = mongoose.Schema(
  {
username : {
type : String,
minLength : 2,
maxLength : 20,
require : true
},
email : {
  type : String,
  require : true,
  unique : true,
},
password: {
  type : String,
  // minLength : 12,
  require : true, 
},
role : {
  type : String,
  enum : ['user', 'admin','superAdmin'],
  default : 'user'
},
isVerified : {
  type : Boolean,
  default : false 
},
isActive : {
  type : Boolean,
  default : true
}
  },
  { timestamps : { createAt : true } },
)
module.exports = mongoose.model('Users', usersShema)