import * as React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SearchResults from './SearchResults';
import {searchForMovies} from '../../redux/actions';

interface SearchProps {
  className?: string;
  searchForMovies: Function,
}

const Search = ({className, searchForMovies}: SearchProps) => {
  const [searchInputText, setSearchInputText] = useState('');
  // todo add onKeyDown Enter
  return (
    <div className={className}>
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
      <SearchResults/>
    </div>
  );
};

export default connect(
  null,
  {searchForMovies},
)(Search);
