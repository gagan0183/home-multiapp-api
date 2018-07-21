var express = require('express');

var router = express.Router();
var courses = require('./course.route');

router.use('/course', courses);
module.exports = router;