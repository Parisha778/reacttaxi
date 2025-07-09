const express = require('express');
const router = express.Router();
// Importer le controlleur 

const UsersController = require('../controllers/user.controller');
const verifieToken = require('../middlewares/auth')

// GET = Récupérer (lire)
// POST = 

router.post('/register',UsersController.register);

router.post('/sign',UsersController.sign);

router.get('/all',verifieToken , UsersController.get_all_users);

module.exports = router;