const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

//env config
dotenv.config()

//rest object
const app= express()

//middleware
app.use(cors())
app.use(express.json())


//static files access
app.use(express.static(path.join(__dirname, './my-netflix/build')))

//routes

// app.get('/', (req,res)=>{
//     res.send('<h1>welcom to server</h1>')
// })
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "./my-netflix/build/index.html"))
})


//port
const PORT = process.env.PORT || 8080

//listten
app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`)
})

