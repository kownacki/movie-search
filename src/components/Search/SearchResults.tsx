import * as React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/fp';
import * as types from '../../utils/types';
import * as reduxTypes from '../../redux/types';
import MovieList from '../MovieList';

interface SearchResultsProps {
  moviesStatus?: reduxTypes.MoviesStatus,
  movies?: types.Movie[],
  query?: string,
}

const renderSwitch = ({moviesStatus, movies, query}: SearchResultsProps) => {
  switch(moviesStatus) {
    case reduxTypes.REQUEST_MOVIES:
      return 'Loading movies...';
    case reduxTypes.SUCCESS_MOVIES:
      return <>
        Showing movies for "{query}"
        <MovieList movies={movies as types.Movie[]}/>
      </>;
    case reduxTypes.FAILURE_MOVIES:
      return 'Something went wrong when fetching data. Try again later.';
    default:
      return '';
  }
};

const SearchResults = (props: SearchResultsProps) => {
  return (
    <div>
      {renderSwitch(props)}
    </div>
  );
};

export default connect(
  _.pick(['moviesStatus', 'movies', 'query']),
)(SearchResults);
