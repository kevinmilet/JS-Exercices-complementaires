document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    function successCB(data) {
        // console.log("Success callback: " + data);
        let film = JSON.parse(data);
        console.log(film);
        document.write(film.title + '<br>');
        document.write(film.genres[0].name + '<br>');
        document.write(film.overview + '<br>');
        console.log(`https://image.tmdb.org/t/p/w500/${film.poster_path}`);
        console.log(document.getElementById('img'));
        document.getElementById("img").src = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
    };

    function errorCB(data) {
        console.log("Error callback: " + data);
    };

    theMovieDb.movies.getById({
        "id": 76203
    }, successCB, errorCB);
})



// console.log(document.getElementById('img'));