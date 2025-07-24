const express = require('express');

const router = express.Router();

// Importer le controller
const ServiceController = require('../controllers/reservation.controller');


//GET = Récuperer ( lire )

router.post('/add', ReservationController.reservation)

router.get('/all', ReservationController.getAllReservations)

router.get('/:id', ReservationController.getReservationById)

router.delete('/delete/:id', ReservationController.deleteReservation)

router.put('/update/:id', ReservationController.updateReservation);

module.exports = router;