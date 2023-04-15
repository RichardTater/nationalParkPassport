//Require packages
const express = require('express')
const cors = require('cors')

//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/../client`))

//Endpoints
const {getParks, getPassport, addToPassport, deleteFromPassport, updateNotes} = require('./controller')

app.get('/parks', getParks)
app.get('/passport', getPassport)
app.post('/passport/:id', addToPassport)
app.delete('/passport/:id', deleteFromPassport)
app.put('/passport/:id', updateNotes)

//Start server with app.listen
app.listen(8008, () => console.log('The server is up and running, NICE!'))