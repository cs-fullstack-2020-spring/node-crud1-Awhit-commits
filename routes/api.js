let express = require('express');

let router = express.Router();
router.use(express.json());

let studentCollection = require('../models/StudentSchema')
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
            res.send(`Student Deleted`);
        }
    })
})


//Teacher Endpoints

router.post('/teacher',(req,res)=>{
    res.send(`Teacher was created`)
})

router.get('/teacher',(req,res)=>{
    res.send(`All Teacher`)
})

router.get('/teacher/:email',(req,res)=>{
    res.send('Teacher found by email')
})

router.put('/teacher/:email',(req,res)=>{
    res.send('Teacher updated by email')
})

router.delete('/teacher/:email',(req,res)=>{
    res.send('Teacher deleted by email')
})




module.exports = router