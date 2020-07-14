import * as React from 'react';
import {useState} from 'react';
import _ from 'lodash/fp';
import {connect} from 'react-redux';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SearchResults from './SearchResults';
import {searchForMovies} from '../../redux/actions';
import * as reduxTypes from '../../redux/types';

interface SearchProps {
  searchForMovies: Function,
  moviesStatus?: reduxTypes.MoviesStatus,
}

const Search = ({moviesStatus, searchForMovies}: SearchProps) => {
  const [searchInputText, setSearchInputText] = useState('');
  // todo add onKeyDown Enter
  return (
    <div>
      <SearchInput
        className="search-input"
        placeholder="Enter movie title"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
        type="text"
      />
      <SearchButton
        className="search-button"
        disabled={!searchInputText || moviesStatus === reduxTypes.REQUEST_MOVIES}
        onClick={() => searchForMovies(searchInputText)}
      >
        Search
      </SearchButton>
      <SearchResults/>
    </div>
  );
};

export default connect(
  _.pick(['moviesStatus']),
  {searchForMovies},
)(Search);
