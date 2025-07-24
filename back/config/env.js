const dotenv = require('dotenv'); 

dotenv.config()

const ENV = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  MONGO_URI_ONLINE: process.env.MONGO_URI_ONLINE,
  MONGO_URI_LOCAL: process.env.MONGO_URI_LOCAL,
  TOKEN_SIGNATURE: process.env.TOKEN_SIGNATURE
}

module.exports = ENV;