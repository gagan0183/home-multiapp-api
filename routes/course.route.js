var express = require('express');

var router = express.Router();

var CourseController = require('../controllers/course.controller');

router.get('/', CourseController.getCourses);
router.post('/', CourseController.saveCourse);
router.put('/', CourseController.updateCourse);
router.delete('/:id', CourseController.removeCourse);

module.exports = router;