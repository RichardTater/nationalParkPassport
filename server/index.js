//Require packages
const express = require('express')
const cors = require('cors')

//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Endpoints
const {getParks, addToPassport, deleteFromPassport} = require('./controller')

app.get('/parks', getParks)
app.post('/passport/:id', addToPassport)
app.delete('/passport/:id', deleteFromPassport)

//Start server with app.listen
app.listen(8008, () => console.log('The server is up and running, NICE!'))