const express = require('express')

const app = express()
const cors = require('cors')

const geniusRouter = require('./controllers/genius')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api', geniusRouter)

module.exports = app