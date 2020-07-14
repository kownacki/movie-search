import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import * as commonTypes from '../utils/types';
import * as types from './types';
import {AppAction} from './actions';

export interface StoreState {
  moviesStatus: types.MoviesStatus;
  movies?: commonTypes.Movie[];
  query?: string,
}

const initialState: StoreState  = {
  moviesStatus: types.NO_MOVIES,
};

function appReducer(state = initialState, action: AppAction): StoreState {
  switch (action.type) {
    case types.REQUEST_MOVIES:
      return {
        moviesStatus: types.REQUEST_MOVIES,
        query: action.query,
      };
    case types.SUCCESS_MOVIES:
      return {
        ...state,
        moviesStatus: types.SUCCESS_MOVIES,
        movies: action.movies,
      };
    case types.FAILURE_MOVIES:
      return {
        ...state,
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
