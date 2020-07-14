import * as React from 'react';
import * as types from '../utils/types';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: types.Movie[],
}

const renderSwitch = ({movies}: MovieListProps) => {
  if (movies.length) {
    return (
      <ul>
        {movies.map((movie) =>
          <li key={movie.imdbID}>
            <MovieCard movie={movie} />
          </li>
        )}
      </ul>
    );
  } else {
    return <div>No movies found</div>;
  }
};

const MovieList = (props: MovieListProps): React.ReactElement => {
  return renderSwitch(props);
};

export default MovieList;
