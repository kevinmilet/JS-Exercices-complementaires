const api_key = 'e1244bd8733b1e1b4c4c313ea409e081';
let movieNameStr = document.querySelector('#searchBar').value;
const searchBtn = document.querySelector('#searchBtn');

// console.log(movieNameStr.value)
searchBtn.addEventListener('click', getMovie(movieNameStr));

function movie(id, title, overview, poster_path, release_date) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.genre = genres;
}

function getMovie(movieNameStr) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=fr-FR&query=${movieNameStr}&page=1&include_adult=false`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
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
    })
}