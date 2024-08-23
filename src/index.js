const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

//routes
app.get('/', (req, res)=>{res.send('Hola mundo') })

//mongodb connetion
mongoose.connect(process.env.MONGODB_URI)
 .then(()=>{console.log('Conectado a mongodb Atlas')})
 .catch((err)=>{console.log(err)})

app.listen(PORT,()=>{console.log('Servidor en Puerto: http://localhost:3000/')})
