import * as types from './types';

export const createMovieStub = (changedProps?: Partial<types.Movie>): types.Movie => ({
  imdbID: 'id',
  Poster: 'posterStub',
  Title: 'Title Stub',
  Year: 'yearStub',
  ...changedProps,
});
