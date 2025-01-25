window.onload = function() {
    var movies = [
        { title: "Inception", genre: "Action", description: "A thief who steals secrets through dream-sharing.", duration: 148, poster: "images/inception.jpg" },
        { title: "Mad Max: Fury Road", genre: "Action", description: "Max teams up with Furiosa in a wasteland.", duration: 125, poster: "images/madmax.jpg" },
        { title: "The Hangover", genre: "Comedy", description: "Three buddies wake up from a bachelor party.", duration: 85, poster: "images/hangover.jpg" },
        { title: "Superbad", genre: "Comedy", description: "Two friends plan to attend a party.", duration: 125, poster: "images/superbad.jpg" },
        { title: "The Shawshank Redemption", genre: "Drama", description: "Two imprisoned men bond over years.", duration: 142, poster: "images/shawshank.jpg" },
        { title: "Fight Club", genre: "Drama", description: "An office worker forms a fight club.", duration: 139, poster: "images/fightclub.jpg" }
    ]; 

    var genreSelect = document.getElementById('genre-select');
    var durationSelect = document.getElementById('duration-select');
    var recommendBtn = document.getElementById('recommend-btn');
    var randomizeBtn = document.getElementById('randomize-btn');
    var movieTitle = document.getElementById('movie-title');
    var movieDescription = document.getElementById('movie-description');
    var moviePoster = document.getElementById('movie-poster');
    var app = document.getElementById('app');

    // Function to filter movies by genre and duration
    function getFilteredMovies(genre, duration) {
        var filteredMovies = [];
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];

            // check genre and duration
            if (movie.genre === genre) {
                if (duration === "Short" && movie.duration < 90) {
                    filteredMovies.push(movie);
                } else if (duration === "Long" && movie.duration > 120) {
                    filteredMovies.push(movie);
                }
            }
        }
        return filteredMovies;
    }

    // Function to display movies
    function displayMovie(movie) {
        movieTitle.textContent = movie.title;
        movieDescription.textContent = movie.description;
        moviePoster.src = movie.poster;
        moviePoster.style.display = 'block';
    }

    // Event listener for the recommendation button
    recommendBtn.addEventListener('click', function() {
        var selectedGenre = genreSelect.value;
        var selectedDuration = durationSelect.value;
        var filteredMovies = getFilteredMovies(selectedGenre, selectedDuration);

        if (filteredMovies.length > 0) {
            var randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)]; //this will select any one random movie from the array
            displayMovie(randomMovie);
        } else {
            movieTitle.textContent = "No movies found.";
            movieDescription.textContent = "";
            moviePoster.style.display = 'none';
        }
    });

    // Event listener for the randomizer
    randomizeBtn.addEventListener('click', function() {
        var randomMovie = movies[Math.floor(Math.random() * movies.length)];
        displayMovie(randomMovie);
    });
};
