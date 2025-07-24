const express = require('express');

const router = express.Router();

// Importer le controller
const ServiceController = require('../controllers/course.controller');


//GET = Récuperer ( lire )

router.post('/add', CourseController.course)

router.get('/all', CourseController.getAllCourses)

router.get('/:id', CourseController.getCourseById)

router.delete('/delete/:id', CourseController.deleteCourse)

router.put('/update/:id', CourseController.updateCourse);

module.exports = router;