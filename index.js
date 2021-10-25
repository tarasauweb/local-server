const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const fs = require('fs')
 
app.use(cors())

app.use(express.static(path.join(__dirname, 'profile')))
app.use(express.static(path.join(__dirname, 'messages')))


app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, 'profile' , 'profile.json'))
    
})
app.get('/messages/id1' , (req, res) => {
    res.sendFile(path.join(__dirname, 'messages' , 'sanya.json'))
    
})
app.get('/messages/id2' , (req, res) => {
    res.sendFile(path.join(__dirname, 'messages' , 'slava.json'))
    
})
app.get('/messages' , (req, res) => {
    res.sendFile(path.join(__dirname, 'messages' , 'messages.json'))
    
})

app.listen(3012 ,() =>{
    console.log('listening on http://localhost:3012')
})