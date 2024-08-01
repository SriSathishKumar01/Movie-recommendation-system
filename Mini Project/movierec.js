/*
const apiKey = 'b7e1b13b';  // Ensure this API key is correct and does not contain any spaces
const query = prompt("Enter movie title: ")  // Movie query

const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .then(data => document.querySelector(".results").innerHTML+=src=data['Poster'])
  .catch(error => console.error('Error:', error));
*/
const apiKey = '1ab0495f';

function searchMovie() {
  const query = document.getElementById('movie-title').value.trim();
  if (!query) {
    alert("Please enter a movie title");
    return;
  }

  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const resultsDiv = document.querySelector(".results");
      resultsDiv.innerHTML = ''; // Clear previous results

      if (data.Response === "True") {
        data.Search.forEach(movie => {
          const movieDetailsDiv = document.createElement('div');
          movieDetailsDiv.className = 'movie-details';

          const posterSrc = movie.Poster !== "N/A" ? movie.Poster : 'default-poster.png'; // Use a default image if no poster is available
          const title = movie.Title;
          const year = movie.Year;

          const img = document.createElement('img');
          img.src = posterSrc;
          img.alt = `Poster of ${title}`;
          movieDetailsDiv.appendChild(img);

          const titleElement = document.createElement('h2');
          titleElement.textContent = `Title: ${title}`;
          movieDetailsDiv.appendChild(titleElement);

          const yearElement = document.createElement('p');
          yearElement.textContent = `Year: ${year}`;
          movieDetailsDiv.appendChild(yearElement);

          resultsDiv.appendChild(movieDetailsDiv);

          // Fetch detailed information for the IMDb rating
          fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then(detailData => {
              const rating = detailData.imdbRating;

              const ratingElement = document.createElement('p');
              ratingElement.textContent = `IMDb Rating: ${rating}`;
              movieDetailsDiv.appendChild(ratingElement);
            })
            .catch(error => console.error('Error fetching detailed info:', error));
        });
      } else {
        const errorElement = document.createElement('p');
        errorElement.textContent = "Movie not found!";
        resultsDiv.appendChild(errorElement);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert(`Error: ${error.message}`);
    });
}


 // Replace with your actual OMDB API key
    



//main source

 // Replace 'YOUR_OMDB_API_KEY' with your actual API key
 const movieTitles = [
  "The Godfather",
  "The Dark Knight",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception",
  "Fight Club",
  "The Matrix",
  "Goodfellas",
  "The Empire Strikes Back",
  "The Shawshank Redemption",
  "The Godfather: Part II",
  "The Silence of the Lambs",
  "Se7en",
  "Saving Private Ryan",
  "Interstellar",
  "Parasite",
  "Spirited Away",
  "The Lion King",
  "Back to the Future",
  "Gladiator",
  "Jurassic Park",
  "Braveheart",
  "The Green Mile",
  "The Prestige",
  "The Departed",
  "Memento",
  "The Usual Suspects",
  "Whiplash",
  "The Pianist",
  "The Dark Knight Rises",
  "Django Unchained",
  "Inglourious Basterds",
  "The Wolf of Wall Street",
  "Mad Max: Fury Road",
  "Logan",
  "A Beautiful Mind",
  "Avengers: Infinity War",
  "Avengers: Endgame",
  "Toy Story 3",
  "Coco",
  "WALL-E",
  "Up",
  "Finding Nemo",
  "Monsters, Inc.",
  "Ratatouille",
  "Inside Out",
  "The Incredibles",
  "Frozen",
  "Moana",
  "Zootopia",
  "Big Hero 6",
  "Tangled",
  "Shrek",
  "Kung Fu Panda",
  "How to Train Your Dragon",
  "Despicable Me",
  "The Secret Life of Pets",
  "Sing",
  "Minions",
  "Megamind",
  "Trolls",
  "The Lego Movie",
  "Batman Begins",
  "Iron Man",
  "Thor: Ragnarok",
  "Guardians of the Galaxy",
  "Black Panther",
  "Doctor Strange",
  "Captain America: The Winter Soldier",
  "Spider-Man: Homecoming",
  "Ant-Man",
  "Deadpool",
  "X-Men: Days of Future Past",
  "Wonder Woman",
  "Man of Steel",
  "Aquaman",
  "Shazam!",
  "Joker",
  "Birds of Prey",
  "The Suicide Squad",
  "Watchmen",
  "300",
  "Sin City",
  "V for Vendetta",
  "Scott Pilgrim vs. the World",
  "Kick-Ass",
  "The Social Network",
  "The Big Short",
  "Spotlight",
  "The Revenant",
  "The Martian",
  "The Imitation Game",
  "Gone Girl",
  "12 Years a Slave",
  "The Grand Budapest Hotel",
  "Birdman",
  "La La Land",
  "Arrival",
  "Blade Runner 2049",
  "The Shape of Water",
  "Three Billboards Outside Ebbing, Missouri",
  "A Star is Born",
  "Bohemian Rhapsody",
  "Green Book",
  "1917",
  "Once Upon a Time in Hollywood",
  "Tenet",
  "Nomadland",
  "Minari",
  "Promising Young Woman",
  "The Father",
  "Sound of Metal",
  "First Cow",
  "The Trial of the Chicago 7",
  "One Night in Miami",
  "Ma Rainey's Black Bottom",
  "Pieces of a Woman",
  "Mank",
  "Da 5 Bloods",
  "The Assistant",
  "Never Rarely Sometimes Always",
  "Onward",
  "Hamilton",
  "The Invisible Man",
  "Palm Springs",
  "Wolfwalkers",
  "Emma",
  "The Personal History of David Copperfield",
  "Greyhound",
  "Borat Subsequent Moviefilm",
  "I'm Thinking of Ending Things",
  "The Midnight Sky",
  "The Old Guard",
  "Extraction",
  "Project Power",
  "Mulan",
  "Bill & Ted Face the Music",
  "Sonic the Hedgehog",
  "Wonder Woman 1984",
  "The Croods: A New Age",
  "Frozen II",
  "Toy Story 4",
  "Ralph Breaks the Internet",
  "Incredibles 2",
  "Coco",
  "Moana",
  "Zootopia",
  "Inside Out",
  "Big Hero 6",
  "Frozen",
  "Wreck-It Ralph",
  "Brave",
  "Tangled",
  "Up",
  "Ratatouille",
  "Cars",
  "The Incredibles",
  "Finding Nemo",
  "Monsters, Inc.",
  "Toy Story 3",
  "Toy Story 2",
  "A Bug's Life",
  "Toy Story",
  "The Little Mermaid",
  "Beauty and the Beast",
  "Aladdin",
  "The Lion King",
  "Pocahontas",
  "The Hunchback of Notre Dame",
  "Hercules",
  "Mulan",
  "Tarzan",
  "Fantasia",
  "Pinocchio",
  "Dumbo",
  "Bambi",
  "Cinderella",
  "Alice in Wonderland",
  "Peter Pan",
  "Lady and the Tramp",
  "Sleeping Beauty",
  "101 Dalmatians",
  "The Sword in the Stone",
  "The Jungle Book",
  "The Aristocats",
  "Robin Hood",
  "The Rescuers",
  "The Fox and the Hound",
  "The Black Cauldron",
  "The Great Mouse Detective",
  "Oliver & Company",
  "The Rescuers Down Under",
  "Beauty and the Beast",
  "Aladdin",
  "The Lion King",
  "Pocahontas",
  "The Hunchback of Notre Dame",
  "Hercules",
  "Mulan",
  "Tarzan",
  "Fantasia 2000",
  "The Emperor's New Groove",
  "Atlantis: The Lost Empire",
  "Lilo & Stitch",
  "Treasure Planet",
  "Brother Bear",
  "Home on the Range",
  "Chicken Little",
  "Meet the Robinsons",
  "Bolt",
  "The Princess and the Frog",
  "Tangled",
  "Winnie the Pooh",
  "Wreck-It Ralph",
  "Frozen",
  "Big Hero 6",
  "Zootopia",
  "Moana",
  "Ralph Breaks the Internet",
  "Frozen II",
  "Raya and the Last Dragon",
  "Encanto",
  "Turning Red",
  "Lightyear",
  "Strange World",
  "Luca",
  "Soul",
  "Onward",
  "Toy Story 4",
  "Incredibles 2",
  "Coco",
  "Cars 3",
  "Finding Dory",
  "The Good Dinosaur",
  "Inside Out",
  "Monsters University",
  "Brave",
  "Cars 2",
  "Toy Story 3",
  "Up",
  "WALL-E",
  "Ratatouille",
  "Cars",
  "The Incredibles",
  "Finding Nemo",
  "Monsters, Inc.",
  "Toy Story 2",
  "A Bug's Life",
  "Toy Story",
  "Naruto",
  "Naruto: Shippuden",
  "One Piece",
  "Dragon Ball",
  "Dragon Ball Z",
  "Dragon Ball Super",
  "Attack on Titan",
  "My Hero Academia",
  "Demon Slayer",
  "Fullmetal Alchemist: Brotherhood",
  "Death Note",
  "Sword Art Online",
  "Tokyo Ghoul",
  "Hunter x Hunter",
  "Bleach",
  "Fairy Tail",
  "JoJo's Bizarre Adventure",
  "Neon Genesis Evangelion",
  "Cowboy Bebop",
  "Samurai Champloo",
  "Steins;Gate",
  "Code Geass",
  "One Punch Man",
  "Mob Psycho 100",
  "The Promised Neverland",
  "Black Clover",
  "Blue Exorcist",
  "Soul Eater",
  "Fire Force",
  "The Seven Deadly Sins",
  "Re:Zero - Starting Life in Another World",
  "Sword Art Online: Alicization",
  "Attack on Titan: The Final Season",
  "Demon Slayer: Mugen Train",
  "Jujutsu Kaisen",
  "Tokyo Revengers",
  "Chainsaw Man"
];

 // Replace with your actual API key

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

          const resultsContainer = document.querySelector('.results');
          resultsContainer.appendChild(movieDetails);
      })
      .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  const numMovies = 200; // For demonstration, fetch details for 10 movies
  const selectedMovies = new Set();

  function fetchMovies() {
      while (selectedMovies.size < numMovies) {
          const randomMovie = getRandomMovie();
          if (!selectedMovies.has(randomMovie)) {
              selectedMovies.add(randomMovie);
              fetchAndDisplayMovieDetails(randomMovie);
          }
      }
  }

  fetchMovies();
});

