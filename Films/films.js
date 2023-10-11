const movies = [
    { title: "Фільм 1", genre: "Комедія", year: 2020 },
    { title: "Фільм 2", genre: "Жахи", year: 2019 },
    { title: "Фільм 3", genre: "Драма", year: 2021 },
];

function searchMovies() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm) ||
            movie.genre.toLowerCase().includes(searchTerm) ||
            movie.year.toString().includes(searchTerm);
    });
    displayMovies(filteredMovies);
}

function addToWatchlist(title) {
    const watchlist = document.getElementById("watchlist");
    const listItem = document.createElement("li");
    listItem.textContent = title;
    watchlist.appendChild(listItem);
}

function displayMovies(movies) {
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";
    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.innerHTML = `<h3>${movie.title}</h3>
                             <p><strong>Жанр:</strong> ${movie.genre}</p>
                             <p><strong>Рік випуску:</strong> ${movie.year}</p>
                             <button onclick="addToWatchlist('${movie.title}')">Додати до списку перегляду</button>`;
        moviesDiv.appendChild(movieDiv);
    });
}

displayMovies(movies);