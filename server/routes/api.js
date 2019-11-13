const express = require("express")
const router = express.Router()
const request = require("request")
const Movie = require('../models/Movie')

router.get('/movie', function(req, res){
    console.log("OK")
})

router.get('/movies/:movieName', function (req, res) {
    let MOVIE = req.params.movieName
    let API_KEY = "25cf257f84e55fc085da612e910409ea"

    request(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MOVIE}`, function (error, response) {
        if (error) {
            console.log(error)
        }
        else {
            let body = JSON.parse(response.body)
            let dataMovie = body.results
            res.send(dataMovie)
        }
    })
})

router.get('/movies', function (req, res) {
    Movie.find({}).exec(function (err, movies) {
        res.send(movies)
    })
})

router.post('/movie', function (req, res) {
    let newMovie = req.body
    let m = new Movie(newMovie)
    m.save()
    res.send(m)
})

router.delete('/movie/:movieID', function (req, res) {
    let movieID = req.params.movieID
    Movie.deleteOne({ id: movieID }, function(err){
        res.send("The movie was deleted")
    })
})










module.exports = router