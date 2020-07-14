import React from 'react';
import {mount} from 'enzyme';
import {MovieCard} from './index';
import * as testUtils from '../../utils/test';

describe('MovieCard', () => {
  it('renders correctly', () => {
    const classNameStub = 'class-name-stub';
    const search = mount(<MovieCard className={classNameStub} movie={testUtils.createMovieStub()}/>);
    expect(search).toMatchSnapshot();
  });
});
