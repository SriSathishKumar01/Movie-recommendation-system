/*
let apiKey = 'b7e1b13b';

const movieTitles = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "billa",
  "nanban",
  "titanic",
  "mission impossible",
  "naruto",
  "game of thrones",
  "the walking dead",
  "the boys",
  "jerry maguire",
  "ben 10",
  "yes man"
  // Add more movie titles as needed
];

function getRandomMovie() {
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  return movieTitles[randomIndex];
}

function fetchAndDisplayMovieDetails(movieTitle) {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const title = data['Title'];
      const year = data['Year'];
      const imdbRating = data['imdbRating'];

      const posterSrc = data['Poster'];
      const img = document.createElement('img');
      img.src = posterSrc;

      const titleElement = document.createElement('h2');
      titleElement.textContent = `Title: ${title}`;

      const yearElement = document.createElement('p');
      yearElement.textContent = `Year: ${year}`;

      const imdbRatingElement = document.createElement('p');
      imdbRatingElement.textContent = `IMDb Rating: ${imdbRating}`;

      const movieDetails = document.createElement('div');
      movieDetails.classList.add('movie-details');
      movieDetails.appendChild(img);
      movieDetails.appendChild(titleElement);
      movieDetails.appendChild(yearElement);
      movieDetails.appendChild(imdbRatingElement);

      const resultsContainer = document.querySelector(".results");
      resultsContainer.appendChild(movieDetails);
    })
    .catch(error => console.error('Error:', error));
}

const numMovies = 15;
const selectedMovies = new Set();

while (selectedMovies.size < numMovies) {
  const randomMovie = getRandomMovie();
  if (!selectedMovies.has(randomMovie)) {
    selectedMovies.add(randomMovie);
    fetchAndDisplayMovieDetails(randomMovie);
  }
}
*/
document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'b7e1b13b'; // Your OMDB API key

  const genreContainer = document.querySelector('.genre-container');
  const recommendButton = document.getElementById('recommend-button');
  const movieContainer = document.getElementById('movie-container');
  let selectedGenres = [];

  // Event listener for selecting genres
  genreContainer.addEventListener('click', function(event) {
      const clickedElement = event.target;
      if (clickedElement.classList.contains('genre-card')) {
          const genre = clickedElement.textContent.trim();
          if (!selectedGenres.includes(genre)) {
              selectedGenres.push(genre);
              clickedElement.classList.add('selected');
          } else {
              selectedGenres = selectedGenres.filter(g => g !== genre);
              clickedElement.classList.remove('selected');
          }
      }
  });

  // Event listener for recommending movies
  recommendButton.addEventListener('click', function() {
      if (selectedGenres.length === 0) {
          alert('Please select at least one genre.');
      } else {
          fetchMovies(selectedGenres);
      }
  });

  // Function to fetch and display recommended movies
  function fetchMovies(genres) {
      movieContainer.innerHTML = ''; // Clear previous movies

      genres.forEach(genre => {
          fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=&type=movie&genre=${encodeURIComponent(genre)}`)
              .then(response => response.json())
              .then(data => {
                  const movies = data['Search'];
                  if (movies) {
                      movies.forEach(movie => {
                          const title = movie['Title'];
                          const year = movie['Year'];
                          const imdbID = movie['imdbID'];
                          const posterSrc = movie['Poster'];
                          
                          const movieCard = document.createElement('div');
                          movieCard.className = 'movie-card';
                          movieCard.innerHTML = `
                              <img src="${posterSrc !== 'N/A' ? posterSrc : 'placeholder_image.jpg'}" alt="${title}">
                              <p>${title}</p>
                              <p>Year: ${year}</p>
                              <p>IMDb ID: ${imdbID}</p>
                          `;
                          movieContainer.appendChild(movieCard);
                      });
                  } else {
                      movieContainer.innerHTML += `<p>No movies found for ${genre} genre.</p>`;
                  }
              })
              .catch(error => {
                  console.error('Error fetching movies:', error);
                  movieContainer.innerHTML += `<p>Error fetching movies for ${genre} genre. Please try again later.</p>`;
              });
      });
  }
});
