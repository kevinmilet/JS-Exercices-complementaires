const api_key = 'e1244bd8733b1e1b4c4c313ea409e081';
const secure_base_url ='https://image.tmdb.org/t/p/'
let movieSearch = document.querySelector('#searchBar');
let searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', function(){
    getMovie(movieSearch.value);
});


function movie(id, title, overview, poster_path, release_date) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.genre = genres;
}

function getMovie(movieNameStr) {
    return fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=fr-FR&query=${movieNameStr}&page=1&include_adult=false`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        let dataArray = JSON.parse(data);
        console.log(dataArray);
        // for (let i = 0; i < data.lenght; i++) {
        //     return data.results[i];
        //  }
         return data.results[0];
    })
    .then(function(movieObj) {
        let movieDetails = movieObj;
        console.log(movieDetails.id);
        console.log(movieDetails.title);
        console.log(movieDetails.overview);
        console.log(movieDetails.release_date);
        console.log(movieDetails.poster_path);
        document.querySelector('.title').innerHTML = movieDetails.title;
        document.querySelector('.release_date').innerHTML = movieDetails.release_date;
        document.querySelector('.overview').innerHTML = movieDetails.overview;
        document.querySelector('.img').src = `${secure_base_url}w185/${movieDetails.poster_path}`;
    })
}