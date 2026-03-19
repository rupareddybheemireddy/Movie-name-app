async function searchMovie() {
    const query = document.getElementById("searchInput").value;

    console.log("Search text:", query);   // 👈 ADD HERE

    const url = `https://www.omdbapi.com/?s=${query}&apikey=thewdb`;

    const response = await fetch(url);
    const data = await response.json();

    console.log("API response:", data);   // 👈 ADD HERE

    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";

    if (data.Response === "True") {
        data.Search.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            movieElement.innerHTML = `
                <h3>${movie.Title}</h3>
                <img src="${movie.Poster}" width="150">
                <p>${movie.Year}</p>
            `;

            moviesDiv.appendChild(movieElement);
        });
    } else {
        moviesDiv.innerHTML = `<p>${data.Error}</p>`;
    }
}