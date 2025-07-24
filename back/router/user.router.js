const express = require('express');

const router = express.Router();

// Importer le controller
const UserController = require('../controllers/user.controller');
const verifieToken = require('../middlewares/auth')

//GET = Récuperer ( lire )

router.post('/inscription', UserController.register);

router.post('/connexion',UserController.sign);

router.get('/all', UserController.getAllUsers)

router.get('/:id', UserController.getUserById)

router.delete('/delete/:id', UserController.deleteUser)

router.put('/update/:id', UserController.updateUser);

module.exports = router;