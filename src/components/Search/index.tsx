import * as React from 'react';
import {useState, useRef} from 'react';
import _ from 'lodash/fp';
import {MAX_INPUT_LENGTH} from '../../utils/constants';
import {connect} from 'react-redux';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SearchResults from './SearchResults';
import {searchForMovies} from '../../redux/actions';
import * as reduxTypes from '../../redux/types';

interface SearchProps {
  searchForMovies: (query: string) => void,
  moviesStatus?: reduxTypes.MoviesStatus,
}

const clickSearchButtonIfPressedEnter = (event: React.KeyboardEvent, buttonRef: React.RefObject<HTMLButtonElement>) => {
  if(event.key === 'Enter') {
    buttonRef.current?.click();
  }
};

export const Search = ({moviesStatus, searchForMovies}: SearchProps): React.ReactElement => {
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [searchInputText, setSearchInputText] = useState('');
  return (
    <div>
      <SearchInput
        placeholder="Enter movie title"
        maxLength={MAX_INPUT_LENGTH}
        onKeyDown={(event) => clickSearchButtonIfPressedEnter(event, searchButtonRef)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
        type="text"
      />
      <SearchButton
        ref={searchButtonRef}
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
