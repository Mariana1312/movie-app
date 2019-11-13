const temp = new TempManager()
const renderer = new Renderer()


const loadPage = async function () {
    await temp.getDataFromDB()
    renderer.renderData(temp.movieData)
}

$("#liked").on("click", async function(){
    await temp.getDataFromDB()
    renderer.renderData(temp.likedMovies)
})

const handleSearch = async function () {
    await temp.getMovieData($("#movieInput").val())
    renderer.renderData(temp.movieData)
}

$(".movies").on("click", '.saveMovie', function () {
    let searchMovie = $(this).closest(".handle").find("#id").text()
    let searchName = $(this).closest(".handle").find(".name").text()
    temp.saveMovie(searchMovie)
    console.log("The movie " + searchName + " was added to the DB")
    loadPage()
})

$(".movies").on("click", '.removeMovie', function () {
    let searchMovie = $(this).closest(".handle").find("#id").text()
    let searchName = $(this).closest(".handle").find(".name").text()
    temp.removeMovie(searchMovie)
    console.log("The movie " + searchName + " was deleted")
    renderer.renderData(temp.likedMovies)
})


