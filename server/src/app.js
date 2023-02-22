console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))  //tells us what device 'hit' the server and some metadata in cmd
app.use(bodyParser.json())  //easily parse jsonreq
app.use(cors())             //clients arround the world can hit the server + security

app.get('/status', (req, res) => { //when it gets a get req, it send back this response -> message: 'hello world!'
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8080)