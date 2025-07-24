const ServiceModel = require('../models/service.model.js')

const service = async(req,res) =>{
    try {
        const service = await ServiceModel.create({
            ...req.body,
        });
        return res.status(201).json("Service has been created !",service);
    } catch (error) {
        return res.status(500).json(error.message)      
    }
}
    const getAllServices = async (req,res)=>{
    try {
        const services = await ServiceModel.find();
        res.status(200).json(services);

    } catch (error) {
        console.log(500).json(error.message);
        
    }
}
    const getServiceById = async (req, res) => {
    try{
        const result = await ServiceModel.findById(req.params.id);
            
        if(!service) return res.status(404).json("Service not found !")
        return res.status(200).json(service)

    }catch(error){  
        return res.status(500).json(error.message)
    }
}

    const deleteService = async (req, res, next) => {
  try{   
    const service = await ServiceModel.findById(req.params.id);
    
    if (!service) return res.status(404).json("Service not found.")
    
    await Model.findOneAndDelete(req.params.id)

    return res.status(200).json(`The Service with the id ${req.params.id} has been deleted.`)
  }catch(error){

    return res.status(500).json(error.message)
  }
}
    const updateService = async (req, res, next) => {
    try{
        
        const user = await ServiceModel.findById(req.params.id);
        
        if(!user) return res.status(404).json("service not found !");
        const serviceUpdated = await Model.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
        )
        res.status(200).json({
        message: "Service updated",
        userUpdated
        })

    }catch(error){
        return res.status(500).json(error.message)
    }
}
module.exports = {
  service,
  getAllServices,
  getServiceById,
  deleteService,
  updateService,
}

