const url = 'https://moviequotes.motioncode.biz:8090/movie_quote';

getMovieQuote(url);

document.getElementById("getQuote").onclick = function(){
    document.getElementById("quote").classList.remove("slidefromright");
    getMovieQuote(url);
}

async function getMovieQuote(url){
    const response = await fetch(url);

    var data = await response.json();
    display(data);
}

function display(data){
    document.getElementById("quote").classList.add("slidefromright");
    document.getElementById("quote").innerHTML = data.Quote;
    document.getElementById("movie").innerHTML = data.Movie;
    document.getElementById("year").innerHTML = data.Year;

}