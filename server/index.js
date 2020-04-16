//It’s the server framework
const express = require('express');
//Responsible to get the body off of network request.
const bodyParser = require('body-parser');
//Package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const cors = require('cors');
//requiring the database
const db = require('./db');
//add router to the Server
const movieRouter = require('./routes/movie-router');
const app = express()
const apiPort = 8000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
