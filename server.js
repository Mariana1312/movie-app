const express = require("express")
const app = express()
const path = require("path")
const api = require('./server/routes/api')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/moviesDB', { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api) 

const port = 3030



app.listen(port, function () {
    console.log(`Running on port ${port}`)
})