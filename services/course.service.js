var Course = require('../models/course.model');

exports.getCourses = async function(query, page, limit) {
    var options = {
        page,
        limit
    }

    try {
        var courses = await Course.paginate(query, options);
        return courses;
    }
    catch(e) {
        throw Error('Error while getting courses');
    }
}

exports.createCourse= async function(course) {
    var newCourse = new Course({
        title: course.title,
        provider: course.provider,
        category: course.category,
        description: course.description,
        startDate: course.startDate,
        completeDate: course.completeDate,
        link: course.link,
        status: course.status,
        print: course.print
    });

    try {
        var saveCourse = await newCourse.save();
        return saveCourse;
    }
    catch(e) {
        throw Error('Error in saving the course');
    }
}

exports.updateCourse =  async function(course) {
    var id = course._id;

    console.log(id);

    try {
        var oldCourse = await Course.findById(id);
    }
    catch(e) {
        throw Error('Error occurred while finding course');
    }

    if(!oldCourse) {
        return false;
    }
    console.log(oldCourse);

    oldCourse.title = course.title;
    oldCourse.provider = course.provider;
    oldCourse.category = course.category;
    oldCourse.description = course.description;
    oldCourse.startDate = course.startDate;
    oldCourse.completeDate = course.completeDate;
    oldCourse.link = course.link;
    oldCourse.status = course.status;
    oldCourse.print = course.staprinttus;

    try {
        var saveCourse = await oldCourse.save();
        return saveCourse;
    }
    catch(e) {
        throw Error('Error occurred while updating that');
    }
}

exports.removeCourse = async function(id) {
    try {
        var deleted = await Course.remove({_id: id});
        if(deleted.n === 0) {
            throw Error('course could not be deleted');
        }
        return deleted;
    }
    catch(e) {
        throw Error('Error occurred while deleting that');
    }
} 