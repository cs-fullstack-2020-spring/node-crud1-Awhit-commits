let express = require('express');

let router = express.Router();
router.use(express.json());

let studentCollection = require('../models/StudentSchema')
let teacherCollection = require('../models/TeacherSchema')
//Student Endpoints

//Create student
router.post('/student',(req,res)=>{
    // res.send(`Student was created`)
    studentCollection.create(req.body,(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(`Student Created`);
        }
    })
})
//Find all students in databasse
router.get('/student',(req,res)=>{
    // res.send(`All students`)
    studentCollection.find({},(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(results);
        }
    })
})
//Find specific student by email
router.get('/student/:studentEmail',(req,res)=>{
    // res.send('Students found by email')
    studentCollection.findOne({studentEmail:req.params.studentEmail},(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(results);
        }
    })
})

//Update Student by specific Email
router.put('/student/:studentEmail',(req,res)=>{
    // res.send('Student updated by email')
    studentCollection.findOneAndUpdate({studentEmail:req.params.studentEmail},req.body,(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(`Student with the email, ${req.params.studentEmail}, was updated`);
        }
    })
})
//Delete Specific Student by Email
router.delete('/student/:studentEmail',(req,res)=>{
    // res.send('Student deleted by email')
    studentCollection.findOneAndDelete({studentEmail:req.params.studentEmail},(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(`Student with the email of ${req.params.studentEmail} was Deleted`);
        }
    })
})


//Teacher Endpoints

//Create A Teacher
router.post('/teacher',(req,res)=>{
    // res.send(`Teacher was created`)
    teacherCollection.create(req.body,(errors)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(`Teacher Created`);
        }
    })


})
//Find All Teachers in database
router.get('/teacher',(req,res)=>{
    // res.send(`All Teachers`)
    teacherCollection.find({},(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(results);
        }
    })

})

//Find a Specifc Teacher by Email

router.get('/teacher/:teacherEmail',(req,res)=>{
    // res.send('Teacher found by email')
    teacherCollection.findOne({teacherEmail:req.params.teacherEmail},(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(results);
        }
    })
})

//Update Teacher by Email
router.put('/teacher/:teacherEmail',(req,res)=>{
    // res.send('Teacher updated by email')
    teacherCollection.findOneAndUpdate({teacherEmail:req.params.teacherEmail},req.body,(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(`Teacher Updated!`);
        }
    })
})
//Delete Teacher by Email

router.delete('/teacher/:teacherEmail',(req,res)=>{
    // res.send('Teacher deleted by email')
    teacherCollection.findOneAndDelete({teacherEmail:req.params.teacherEmail},(errors,results)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(`Teacher with the email of ${req.params.teacherEmail} was deleted!`);
        }
    })
})




module.exports = router