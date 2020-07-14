import * as commonTypes from '../utils/types';
import * as types from './types';
import {appReducer, StoreState} from './store';
import * as actions from './actions';

const afterRequestMoviesStateStub: StoreState = {
  moviesStatus: types.REQUEST_MOVIES,
  query: 'query stub',
};

describe('appReducer', () => {
  it('should handle REQUEST_MOVIES', () => {
    const queryStub = 'query stub';
    const actionStub: actions.SearchForMoviesAction = {type: types.REQUEST_MOVIES, query: queryStub};
    expect(appReducer(undefined, actionStub))
      .toEqual({
        moviesStatus: types.REQUEST_MOVIES,
        query: queryStub,
      });
  });

  it('should handle SUCCESS_MOVIES', () => {
    const moviesStub: commonTypes.Movie[] = [];
    const successReceiveMoviesActionStub: actions.ReceiveMoviesAction = {
      type: types.SUCCESS_MOVIES,
      movies: moviesStub
    };
    expect(appReducer(afterRequestMoviesStateStub, successReceiveMoviesActionStub))
      .toEqual({
        moviesStatus: types.SUCCESS_MOVIES,
        movies: moviesStub,
        query: afterRequestMoviesStateStub.query,
      });
  });

  it('should handle FAILURE_MOVIES', () => {
    const failReceiveMoviesActionStub: actions.ReceiveMoviesAction = {type: types.FAILURE_MOVIES};
    expect(appReducer(afterRequestMoviesStateStub, failReceiveMoviesActionStub))
      .toEqual({
        moviesStatus: types.FAILURE_MOVIES,
        query: afterRequestMoviesStateStub.query,
      });
  });
});
