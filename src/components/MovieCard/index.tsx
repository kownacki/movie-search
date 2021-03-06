import * as React from 'react';
import styled from 'styled-components';
import * as types from '../../utils/types';
import * as styles from '../../utils/styles';
import MovieCardPosterImg from './MovieCardPosterImg';
import MovieCardInfo from './MovieCardInfo';
import posterPlaceholder from '../../images/moviePosterNotAvailable.jpg';

interface MovieCardProps {
  className?: string;
  movie: types.Movie,
}

export const MovieCard = ({className, movie}: MovieCardProps): React.ReactElement => {
  return (
    <div className={className}>
      <MovieCardPosterImg src={movie.Poster || posterPlaceholder} alt={`${movie.Title} Poster`} />
      <MovieCardInfo title={movie.Title} year={movie.Year}/>
    </div>
  );
};

export default styled(MovieCard)`
  display: flex;
  margin: 20px 0;
  @media (max-width: ${styles.rwdBreakpoints[2]}px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;
