import * as React from 'react';
import {useState} from "react";
import * as OMDb from '../OMDb';
import SearchResults from "./SearchResults";

const handleClick = async (searchInputText: string) => {
  const result = await OMDb.search(encodeURIComponent(searchInputText));
  console.log(result)
};

const App = () => {
  const [searchInputText, setSearchInputText] = useState('');

  return (
    <div className="App">
      <input
        className="search-input"
        placeholder="Enter username"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
        type="text"
      />
      <button
        className="search-button"
        disabled={!searchInputText}
        onClick={() => handleClick(searchInputText)}
      >
        Search
      </button>
      <SearchResults />
    </div>
  );
};

export default App;
