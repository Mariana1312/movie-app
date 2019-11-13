const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    name: String,
    date: String,
    poster: String,
    overview: String,
    id: Number
})

const Movie = mongoose.model("Movie", movieSchema)




module.exports = Movie