import * as React from 'react';
import {useState} from 'react';
import '../index.css';
import * as OMDb from '../OMDb';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchButton from './SearchButton';

const handleClick = async (searchInputText: string) => {
  const result = await OMDb.search(encodeURIComponent(searchInputText));
  console.log(result)
};

const App = () => {
  const [searchInputText, setSearchInputText] = useState('');

  return (
    <div className="App">
      <SearchInput
        className="search-input"
        placeholder="Enter username"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
        type="text"
      />
      <SearchButton
        className="search-button"
        disabled={!searchInputText}
        onClick={() => handleClick(searchInputText)}
      >
        Search
      </SearchButton>
      <SearchResults />
    </div>
  );
};

export default App;
