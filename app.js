import { getMovies } from './fetch-utils.js';

const fetchData = async () => {
    const movies = await getMovies();
    console.log(movies);
    const movieList = document.getElementById('movie-list');
    for (let movie of movies) {
        const li = document.createElement('li');
        li.textContent = movie.title;
        movieList.append(li);
    }
};

fetchData();
