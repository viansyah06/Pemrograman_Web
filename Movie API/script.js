document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const movieInfoSection = document.querySelector(".movie-info");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            const omdbApiKey = '2e3b43fc'; // Your OMDB API Key
            const omdbUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${omdbApiKey}`;

            fetch(omdbUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === 'True') {
                        const movieTitle = data.Title;
                        const movieYear = data.Year;
                        const movieGenre = data.Genre;
                        const movieReleased = data.Released;
                        const moviePlot = data.Plot;
                        const moviePoster = data.Poster;
                        const actorsList = data.Actors;
                        const movieRating = data.imdbRating;

                        // Add inline style to make the rating striking
                        const ratingStyle = `color: red; font-weight: bold;`;

                        movieInfoSection.innerHTML = `
                            <h2>${movieTitle} (${movieYear})</h2>
                            <p>Genre: ${movieGenre}</p>
                            <p>Released: ${movieReleased}</p>
                            <p>Plot: ${moviePlot}</p>
                            <p>Actors: ${actorsList}</p>
                            <p>IMDB Rating: <span style="${ratingStyle}">${movieRating}</span></p>
                            <img src="${moviePoster}" alt="${movieTitle} Poster">
                        `;
                    } else {
                        movieInfoSection.innerHTML = "<p>No movie found</p>";
                    }
                })
                .catch(err => {
                    console.error(err);
                    movieInfoSection.innerHTML = "<p>An error occurred while fetching data</p>";
                });
        }
    });
});
