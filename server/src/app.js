console.log('hello')
const express = require('express')

// parse json-data easily
const bodyParser = require('body-parser')

// security stuff
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world'
  })
})

app.listen(process.env.PORT || 8081)
