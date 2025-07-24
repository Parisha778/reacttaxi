const express = require('express');

const router = express.Router();

// Importer le controller
const ServiceController = require('../controllers/service.controller');


//GET = Récuperer ( lire )

router.post('/add',ServiceController.service)

router.get('/all', ServiceController.getAllServices)

router.get('/:id', ServiceController.getServiceById)

router.delete('/delete/:id', ServiceController.deleteService)

router.put('/update/:id', ServiceController.updateService);

module.exports = router;