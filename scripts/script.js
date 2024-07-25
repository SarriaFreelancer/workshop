document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('movies-container');
            data.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                
                const movieImage = document.createElement('img');
                movieImage.src = movie.Poster;
                movieCard.appendChild(movieImage);

                const movieTitle = document.createElement('h3');
                movieTitle.textContent = movie.Title;
                movieCard.appendChild(movieTitle);

                const movieDescription = document.createElement('p');
                movieDescription.textContent = movie.Description;
                movieCard.appendChild(movieDescription);

                container.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
});
