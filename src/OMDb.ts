import {Movie} from './types';

interface SearchResult {
  movies?: Movie[],
  isSuccess: boolean,
}

const OMDB_API_URL = 'http://www.omdbapi.com/';

export const search = async (query: string): Promise<SearchResult> => {
  // todo add more than 10
  // todo api key
  const response = await fetch(`${OMDB_API_URL}?s=${query}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
  return response.status === 200
    ? {movies: (await response.json()).Search, isSuccess: true}
    : {isSuccess: false}
};

// export const getRepos = async (username) => {
//   const response = await fetch(`https://api.github.com/users/${username}/repos`);
//   return response.status === 200 ? await response.json() : false;
// };
