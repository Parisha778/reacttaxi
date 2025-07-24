const CourseModel = require('../models/course.model.js')

const course = async(req,res) =>{
    try {
        const service = await CourseModel.create({
            ...req.body,
        });
        return res.status(201).json("Course has been created !",service);
    } catch (error) {
        return res.status(500).json(error.message)      
    }
}
    const getAllCourses = async (req,res)=>{
    try {
        const courses = await CourseModel.find();
        res.status(200).json(courses);

    } catch (error) {
        console.log(500).json(error.message);
        
    }
}
    const getCourseById = async (req, res) => {
    try{
        const result = await CourseModel.findById(req.params.id);
            
        if(!course) return res.status(404).json("Course not found !")
        return res.status(200).json(course)

    }catch(error){  
        return res.status(500).json(error.message)
    }
}

    const deleteCourse = async (req, res, next) => {
  try{   
    const course = await CourseModel.findById(req.params.id);
    
    if (!course) return res.status(404).json("Course not found.")
    
    await Model.findOneAndDelete(req.params.id)

    return res.status(200).json(`The Course with the id ${req.params.id} has been deleted.`)
  }catch(error){

    return res.status(500).json(error.message)
  }
}
    const updateCourse = async (req, res, next) => {
    try{
        
        const user = await ServiceModel.findById(req.params.id);
        
        if(!user) return res.status(404).json("course not found !");
        const courseUpdated = await Model.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
        )
        res.status(200).json({
        message: "Course updated",
        userUpdated
        })

    }catch(error){
        return res.status(500).json(error.message)
    }
}
module.exports = {
  course,
  getAllCourses,
  getCourseById,
  deleteCourse,
  updateCourse,
}

