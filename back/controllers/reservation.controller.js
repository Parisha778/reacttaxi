const ReservationModel = require('../models/reservation.model.js')

const reservation = async(req,res) =>{
    try {
        const reservation = await ReservationModel.create(req.body,
        );
        return res.status(201).json("Reservation has been created !",service);
    } catch (error) {
        return res.status(500).json(error.message)      
    }
}
    const getAllReservations = async (req,res)=>{
    try {
        const reservations = await ReservationModel.find();
        res.status(200).json(reservations);

    } catch (error) {
        console.log(500).json(error.message);
        
    }
}
    const getReservationById = async (req, res) => {
    try{
        const result = await ReservationModel.findById(req.params.id);
            
        if(!reservation) return res.status(404).json("Reservation not found !")
        return res.status(200).json(reservation)

    }catch(error){  
        return res.status(500).json(error.message)
    }
}

    const deleteReservation = async (req, res, next) => {
  try{   
    const reservation = await ReservationModel.findById(req.params.id);
    
    if (!reservation) return res.status(404).json("Reservation not found.")
    
    await Model.findOneAndDelete(req.params.id)

    return res.status(200).json(`The Reservation with the id ${req.params.id} has been deleted.`)
  }catch(error){

    return res.status(500).json(error.message)
  }
}
    const updateReservation = async (req, res, next) => {
    try{
        
        const reservation = await ReservationModel.findById(req.params.id);
        
        if(!reservation) return res.status(404).json("reservation not found !");
        const reservationUpdated = await Model.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
        )
        res.status(200).json({
        message: "Reservation updated",
        reservationUpdated
        })

    }catch(error){
        return res.status(500).json(error.message)
    }
}
module.exports = {
  reservation,
  getAllReservations,
  getReservationById,
  deleteReservation,
  updateReservation,
}

