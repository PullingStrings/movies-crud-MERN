
const express = require('express')
//It’s the server framework
const bodyParser = require('body-parser')
//Responsible to get the body off of network request.
const cors = require('cors')
//Package for providing a Connect/Express middleware that can be used to enable CORS with various options.

const db = require('./db')
//requiring the database
const app = express()
const apiPort = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
