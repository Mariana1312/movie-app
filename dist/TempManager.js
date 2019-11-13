class TempManager {

    constructor() {
        this.likedMovies = []
        this.movieData = []
    }

    async getDataFromDB() {
        let movies = await $.get('/movies')
        this.likedMovies = movies
        console.log(this.likedMovies)
    }

    async getMovieData(movieName) {
        let newMovie = await $.get(`/movies/${movieName}`)
        this.movieData = []
        for (let movie of newMovie){
            this.movieData.push({
                name: movie.title,
                date: movie.release_date,
                poster: movie.poster_path,
                overview: movie.overview,
                id: movie.id
            })
        }
       
        console.log(this.movieData)
    }

    saveMovie(movieID) {
        let movie = this.movieData.find(m => m.id == movieID)
        $.post('/movie', movie)
    }

    removeMovie(movieID) {
        let findID = this.likedMovies.findIndex(m => m.id == movieID)
        this.likedMovies.splice(findID, 1)
        $.ajax({
            method: "DELETE",
            url: `/movie/${movieID}`,
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
    
}


