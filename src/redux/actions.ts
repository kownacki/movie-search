import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from './store';
import {Movie} from '../utils/types';
import * as types from './types';
import * as OMDb from '../utils/OMDb';

export interface SearchForMoviesAction {
  type: types.REQUEST_MOVIES,
  query: string,
}

export interface ReceiveMoviesAction {
  type: types.SUCCESS_MOVIES | types.FAILURE_MOVIES,
  movies?: Movie[],
}

export type AppAction = SearchForMoviesAction | ReceiveMoviesAction;

export const requestMovies = (query: string): SearchForMoviesAction => ({type: types.REQUEST_MOVIES, query});
export const receiveMovies = (result: types.SUCCESS_MOVIES | types.FAILURE_MOVIES, movies?: Movie[]): ReceiveMoviesAction =>
  ({type: result, movies});

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const searchForMovies = (query: string): AppThunk => {
  return async (dispatch) => {
    dispatch(requestMovies(query));
    const searchResult = await OMDb.search(encodeURIComponent(query));
    if (searchResult.isSuccess) {
      dispatch(receiveMovies(types.SUCCESS_MOVIES, searchResult.movies));
    } else {
      dispatch(receiveMovies(types.FAILURE_MOVIES));
    }
  }
};
