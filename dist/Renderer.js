class Renderer{

    renderData(allMovieData){
        const source = $("#movie-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({allMovieData})
        $(".movies").empty().append(newHTML)
    }

}