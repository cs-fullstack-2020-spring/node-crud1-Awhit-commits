const express = require('express');

const port = 5000;

const app = express();


const mongoose = require('mongoose')
const mongoDB = 'mongodb+srv://ndrwwhtmr:VaUOsbhP8iq8kqQ2@cluster0-taich.mongodb.net/cs_database?retryWrites=true&w=majority'

console.log(`Connecting to mongoDB at ${mongoDB}`)
mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true });

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


api = require('./routes/api')

app.use('/api',api)
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})