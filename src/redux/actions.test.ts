import * as actions from './actions';
import * as commonTypes from '../utils/types';
import * as types from './types';

describe('actions', () => {
  describe('requestMovies', () => {
    it('creates correct action', () => {
      const queryStub = 'query stub';
      expect(actions.requestMovies(queryStub)).toEqual(({type: types.REQUEST_MOVIES, query: queryStub}));
    });
  });

  describe('requestMovies', () => {
    it('creates correct action (success)', () => {
      const moviesStub: commonTypes.Movie[] = [];
      expect(actions.receiveMovies(types.SUCCESS_MOVIES, moviesStub))
        .toEqual(({type: types.SUCCESS_MOVIES, movies: moviesStub}));
    });

    it('creates correct action (failure)', () => {
      expect(actions.receiveMovies(types.FAILURE_MOVIES))
        .toEqual(({type: types.FAILURE_MOVIES}));
    });
  });
});
