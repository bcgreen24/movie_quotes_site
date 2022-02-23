const url = 'http://www.somelonelydistantplanet.com:8090/movie_quote';

getMovieQuote(url);

document.getElementById("getQuote").onclick = function(){
    getMovieQuote(url);
}

async function getMovieQuote(url){
    const response = await fetch(url);

    var data = await response.json();
    display(data);
}

function display(data){
    console.log(data)
    document.getElementById("quote").innerHTML = data.Quote;
    document.getElementById("movie").innerHTML = data.Movie;
    document.getElementById("year").innerHTML = data.Year;

}