import * as React from 'react';
import styled from 'styled-components';
import '../index.css';
import Search from './Search';

interface AppProps {
  className?: string,
}

export const App = ({className}: AppProps) => {
  return (
    <div className={className}>
      <Search />
    </div>
  );
};

export default styled(App)`
  margin: auto;
  max-width: 700px;
`;

