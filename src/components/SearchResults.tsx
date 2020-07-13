import * as React from 'react';
import MovieCard from './MovieCard';
import * as types from '../types';

interface SearchResultsProps {
  movies?: types.Movie[],
}

const SearchResults = ({movies}: SearchResultsProps) => {
  return (
    <div>
      {movies?.map((movie) =>
        <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
        // <li key={user.id}><Dropdown username={user.name} index={index} userID={user.id} /></li>
      )}

    </div>
  );
};

export default SearchResults;