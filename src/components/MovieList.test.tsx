import React from 'react';
import {shallow} from 'enzyme';
import MovieList from './MovieList';
import * as types from '../utils/types';
import * as testUtils from '../utils/test';

describe('MovieList', () => {
  it('correctly renders movies', () => {
    const moviesStub: types.Movie[] = [
      // arbitrary number of movies with different ids
      testUtils.createMovieStub({imdbID: 'id1'}),
      testUtils.createMovieStub({imdbID: 'id2'}),
      testUtils.createMovieStub({imdbID: 'id3'}),
    ];
    const movieList = shallow(<MovieList movies={moviesStub} />);
    expect(movieList).toMatchSnapshot();
  });

  it('renders correctly when no movies', () => {
    const emptyMoviesStub: types.Movie[] = [];
    const movieList = shallow(<MovieList movies={emptyMoviesStub} />);
    expect(movieList).toMatchSnapshot();
  });
});
