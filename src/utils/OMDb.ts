import {Movie} from './types';
const OMDB_API_URL = 'https://www.omdbapi.com/';

// Blank posters are described by 'N/A'. Replace them with null.
const nullifyBlankPoster = (movie: Movie): Movie => ({...movie, Poster: movie.Poster === 'N/A' ? null : movie.Poster});

const getMoviesFromResponse = async (response: Response): Promise<Movie[]> => {
  const json = await response.json();
  return (json.Response === "True") ? json.Search.map(nullifyBlankPoster) : [];
};

interface SearchResult {
  movies?: Movie[],
  isSuccess: boolean,
}

export const search = async (query: string): Promise<SearchResult> => {
  // todo add more than 10
  const response = await fetch(`${OMDB_API_URL}?s=${query}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
  return response.status === 200
    ? {movies: await getMoviesFromResponse(response), isSuccess: true}
    : {isSuccess: false}
};
