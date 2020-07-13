import * as React from 'react';
import styled from 'styled-components';

interface MovieCardInfoProps {
  className?: string;
  title: string;
  year: string;
}

const MovieCardInfo = styled(({className, title, year}: MovieCardInfoProps) => {
  return (
    <div className={className}>
      <h2>Title: {title}</h2>
      <p>Year of release: {year}</p>
    </div>
  );
})`
`;

export default MovieCardInfo;
