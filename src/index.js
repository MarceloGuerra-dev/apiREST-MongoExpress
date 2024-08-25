const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRouter = require('./routes/user.js')

const PORT = process.env.PORT || 3000
const app = express()

//middleware
app.use(express.json())
app.use('/api', userRouter)


//routes
app.get('/', (req, res)=>{
    res.send('Hola mundo') })

//inicia el servisor    
app.listen(PORT,()=>{
    console.log('Servidor en Puerto: http://localhost:3000/')})

//mongodb connetion
mongoose.connect(process.env.MONGODB_URI)
 .then(()=>{console.log('Conectado a mongodb Atlas')})
 .catch((err)=>{console.log(err)})

