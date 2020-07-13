import * as React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/fp';
import '../index.css';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';
import {searchForMovies} from '../redux/actions';
import * as types from '../types';
import * as reduxTypes from '../redux/types';

interface AppProps {
  moviesStatus?: reduxTypes.MoviesStatus,
  movies?: types.Movie[],
  searchForMovies: Function,
}

const App = ({movies, moviesStatus, searchForMovies}: AppProps) => {
  const [searchInputText, setSearchInputText] = useState('');
  // todo add onKeyDown Enter
  return (
    <div className="App">
      <SearchInput
        className="search-input"
        placeholder="Enter movie title"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
        type="text"
      />
      <SearchButton
        className="search-button"
        disabled={!searchInputText}
        onClick={() => searchForMovies(searchInputText)}
      >
        Search
      </SearchButton>
      <SearchResults movies={movies} />
    </div>
  );
};

export default connect(
  _.pick(['moviesStatus', 'movies']),
  {searchForMovies},
)(App);

