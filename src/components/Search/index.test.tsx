import React from 'react';
import {shallow} from 'enzyme';
import {Search} from './index';

describe('Search', () => {
  it('renders correctly', () => {
    const searchForMoviesStub = () => {'nothing'};
    const search = shallow(<Search searchForMovies={searchForMoviesStub}/>);
    expect(search).toMatchSnapshot();
  });
});
