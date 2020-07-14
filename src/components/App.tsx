import * as React from 'react';
import styled from 'styled-components';
import '../index.css';
import Search from './Search';

interface AppProps {
  className?: string,
}

export const App = ({className}: AppProps): React.ReactElement => {
  return (
    <div className={className}>
      <h1>Movie Search</h1>
      <Search />
    </div>
  );
};

export default styled(App)`
  margin: auto;
  max-width: 700px;

  h1 {
    font-weight: normal;
    font-size: 30px;
    text-align: center;
  }
`;
