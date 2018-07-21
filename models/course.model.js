var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var CourseSchema = new mongoose.Schema({
    title: String,
    provider: String,
    category: String,
    description: String,
    startDate: Date,
    completeDate: Date,
    link: String,
    status: String,
    print: Boolean
});

CourseSchema.plugin(mongoosePaginate);
const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;