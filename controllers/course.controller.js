var CourseService = require('../services/course.service');

exports.getCourses =  async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 9;

    try {
        var courses = await CourseService.getCourses({}, page, limit);
        return res.status(200).json({status: 200, data: courses, message: 'Successfully courses retrieved'});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.saveCourse = async function(req, res, next) {
    var course = req.body;

    try {
        var createCourse = await CourseService.createCourse(course);
        return res.status(200).json({status: 200, message: "Course created successfully"});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateCourse = async function(req, res, next) {
    if(!req.body._id) {
        return res.status(400).json({status: 400, message: 'Id must be there'});
    }
    try {
        var updateCourse = await CourseService.updateCourse(req.body);
        return res.status(200).json({status: 200, data: updateCourse, message: "Course updated successfully"});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.removeCourse = async function(req, res, next){
    var id = req.params.id;
    try{
        var deleted = await CourseService.removeCourse(id);
        return res.status(200).json({status:204, message: "Succesfully course Deleted"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
}