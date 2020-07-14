import React from 'react';
import {mount} from 'enzyme';
import {MovieCard} from './index';

describe('MovieCard', () => {
  it('renders correctly', () => {
    const classNameStub = 'class-name-stub';
    const moviesStub = {
      imdbID: 'id',
      Poster: null,
      Title: 'Title Stub',
      Year: 'yearStub',
    };
    const search = mount(<MovieCard className={classNameStub} movie={moviesStub}/>);
    expect(search).toMatchSnapshot();
  });
});
