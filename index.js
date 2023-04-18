const express = require('express');
const mongoose = require('mongoose');
const app = express()







app.get('/api/v1/rollers', (req,res)=>{
    res.send("Who are you")
})



const port = process.env.port || 8080
app.listen(port, ()=>{
    console.log('server is running on ', port)
})