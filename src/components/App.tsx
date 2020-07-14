import * as React from 'react';
import styled from 'styled-components';
import '../index.css';
import Search from './Search';

interface AppProps {
  className?: string,
}

const App = styled(({className}: AppProps) => {
  return (
    <div className={className}>
      <Search />
    </div>
  );
})`
  margin: auto;
  max-width: 700px;
`;

export default App;
