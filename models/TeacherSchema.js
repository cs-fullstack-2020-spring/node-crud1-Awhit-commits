let mongoose = require('mongoose');

let Schema = mongoose.Schema

let TeacherSchema = new Schema ({
    teacherName:String,
    teacherEmail:String,
    teacherCourseFocus:String
})

module.exports = mongoose.model('teacher',TeacherSchema)