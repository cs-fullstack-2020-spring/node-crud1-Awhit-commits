let mongoose = require('mongoose');

let Schema = mongoose.Schema

let StudentSchema = new Schema({
    studentName:String,
    studentEmail:String
})

module.exports = mongoose.model('Student',StudentSchema)