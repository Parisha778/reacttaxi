const express = require('express');
const connectMongoDB = require('./config/dbMongo');
const ENV = require('./config/env')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

// IMPORT ROUTES
const userRouter = require('./routes/user.router')

// CONNEXION MONGO
connectMongoDB(ENV.MONGO_URI_ONLINE, ENV.DB_NAME);

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// URLS API PREFIX
app.use("/api/user",userRouter)
// MIDDLEWARE GESTION D ERREURS


module.exports = app;