const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectMongoDB = require('./config/dbMango.js');
const ENV = require('./config/env.js');
const app = express();

// IMPORT ROUTES
const userRouter = require('./router/user.router.js');
const serviceRouter = require('./router/service.router.js');
const courseRouter = require('./router/course.router.js');


// CONNEXION MONGO
connectMongoDB(ENV.MONGO_URI_ONLINE, ENV.DB_NAME);

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors())

// URLS API PREFIX
app.use("/api/user", userRouter);
app.use("/api/service", serviceRouter);

// MIDDLEWARE DE GESTION DÉERREURS
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Une erreur est survenue."
  const details = error.details || null;

  res.status(status).json({
    error: {
      status,
      message,
      details
    }
  })
})

module.exports = app;