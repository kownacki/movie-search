import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders div with Search', () => {
    const classNameStub = 'class-name-stub';
    const app = shallow(<App className={classNameStub} />);
    expect(app).toMatchSnapshot();
  });
});
