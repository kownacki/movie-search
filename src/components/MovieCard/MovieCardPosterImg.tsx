import styled from 'styled-components';
import * as styles from '../../styles';

// Standard movie poster aspect ratio is 27x40 or 0.675
const posterWidth = 200;
const posterWidthCompact = 150;

const MovieCardPosterImg = styled.img`
  align-self: flex-start;
  ${styles.widthAndMinWidth(posterWidth)}
  border-radius: ${styles.borderRadius}px;
  box-shadow: ${styles.cardBoxShadow};
  overflow: hidden;
  @media (max-width: ${styles.rwdBreakpoints[1]}px) {
    ${styles.widthAndMinWidth(posterWidthCompact)}
  }
  @media (max-width: ${styles.rwdBreakpoints[2]}px) {
    margin: 0 auto 10px;
    max-width: 100%;
    width: ${posterWidth}px;
  }
`;

export default MovieCardPosterImg;
