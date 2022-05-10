const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
    // return the list of all movies
    const resp = await client.from('movies').select('*');
    console.log(resp);
    return checkError(resp);
}

export async function getMoviesWithDirector() {
    // return the list of all the movies with their director
    const resp = await client.from('movies').select('title, directors(name)');
    console.log(resp);
    return checkError(resp);
}

export async function getDirectorNames() {
    // return the list of the director's names
}

export async function getMovieById(id) {
    // return the movie with the given id
}

export async function getMovieByTitle(title) {
    // return the movie with the given title
}

export async function getOldestMovie() {
    // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
    // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
    // return movie with the highest box office total
}
