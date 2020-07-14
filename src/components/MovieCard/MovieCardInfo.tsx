import * as React from 'react';
import styled from 'styled-components';
import * as styles from '../../utils/styles';

interface MovieCardInfoProps {
  className?: string;
  title: string;
  year: string;
}

const MovieCardInfo = styled(({className, title, year}: MovieCardInfoProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>Year of release: {year}</p>
    </div>
  );
})`
  width: 100%;
  padding: 0 20px;
  border-radius: ${styles.borderRadius}px;
  box-shadow: ${styles.cardBoxShadow};
  overflow: hidden;
  margin-left: 10px;
  word-break: break-all;

  h2 {
    font-weight: normal;
    font-size: 24px;
  }
  
  @media (max-width: ${styles.rwdBreakpoints[1]}px) {
    h2 {
      font-size: 21px;
    }
  }
  
  @media (max-width: ${styles.rwdBreakpoints[2]}px) {
    width: auto;
    margin-left: 0;
    text-align: center;
  }
`;

export default MovieCardInfo;
