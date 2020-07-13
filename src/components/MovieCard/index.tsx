import * as React from 'react';
import styled from 'styled-components';
import * as types from '../../types';
import MovieCardPosterImg from './MovieCardPosterImg';
import MovieCardInfo from './MovieCardInfo';
import posterPlaceholder from '../../images/moviePosterNotAvailable.jpg';

interface MovieCardProps {
  className?: string;
  movie: types.Movie,
}

const MovieCard = styled(({className, movie}: MovieCardProps) => {
  return (
    <div className={className}>
      <MovieCardPosterImg src={movie.Poster || posterPlaceholder} alt={`${movie.Title} Poster`} />
      <MovieCardInfo title={movie.Title} year={movie.Year}/>
    </div>
  );
})`
  display: flex;
`;

export default MovieCard;
