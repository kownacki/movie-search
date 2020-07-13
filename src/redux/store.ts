import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import * as commonTypes from '../types';
import * as types from './types';
import {AppAction} from './actions';

export interface StoreState {
  moviesStatus: types.MoviesStatus;
  movies?: commonTypes.Movie[];
}

const initialState: StoreState  = {
  moviesStatus: types.NO_MOVIES,
  movies: [],
};

// SearchForMovies ???
function appReducer(state = initialState, action: AppAction): StoreState {
  switch (action.type) {
    case types.REQUEST_MOVIES:
      return {
        moviesStatus: types.REQUEST_MOVIES,
      };
    case types.SUCCESS_MOVIES:
      return {
        moviesStatus: types.SUCCESS_MOVIES,
        movies: action.movies,
      };
    case types.FAILURE_MOVIES:
      return {
        moviesStatus: types.FAILURE_MOVIES,
      };
    default:
      return state;
  }
}

export default createStore(
  appReducer,
  applyMiddleware(thunkMiddleware),
);

export type RootState = ReturnType<typeof appReducer>
