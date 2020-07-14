import * as React from 'react';
import MovieCard from '../MovieCard';
import * as types from '../../utils/types';
import {connect} from 'react-redux';
import _ from 'lodash/fp';

interface SearchResultsProps {
  movies?: types.Movie[],
}

const SearchResults = ({movies}: SearchResultsProps) => {
  return (
    <div>
      {movies?.map((movie) =>
        <MovieCard key={movie.imdbID} movie={movie} />
      )}
    </div>
  );
};

export default connect(
  _.pick(['moviesStatus', 'movies']),
)(SearchResults);
