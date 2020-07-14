import * as React from 'react';
import * as types from '../utils/types';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: types.Movie[],
}

const MovieList = ({movies}: MovieListProps): React.ReactElement => {
  return (
    <div>
      {!movies.length ? 'No movies found' : movies.map((movie) =>
        <MovieCard key={movie.imdbID} movie={movie} />
      )}
    </div>
  );
};

export default MovieList;
