import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import fetchMock from "jest-fetch-mock";

Enzyme.configure({adapter: new ReactSixteenAdapter()});

fetchMock.enableMocks();
