function successCB(data) {
    console.log("Success callback: " + data);
};

function errorCB(data) {
    console.log("Error callback: " + data);
};


console.log(theMovieDb.find.getById({ "id": "tt0993846", "external_source": "imdb_id" }, successCB, errorCB));