import * as React from 'react';
import * as types from '../types';

interface MovieCardProps {
  movie: types.Movie,
}

const MovieCard = ({movie}: MovieCardProps) => {
  return (
    <div>
      <img src={movie.Poster} />
    </div>
  );
};

export default MovieCard;
