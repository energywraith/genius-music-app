const express = require('express')
const path = require('path')

const app = express()
const cors = require('cors')

const geniusRouter = require('./controllers/genius')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api', geniusRouter)

// To handle react-router routes
app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, 'build/index.html'));
});

module.exports = app