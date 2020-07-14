import * as OMDb from './OMDb';
import fetchMock from 'jest-fetch-mock';
import * as types from './types';

describe('OMDb', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('search', () => {
    it('returns movies', async () => {
      const moviesStub: types.Movie[] = [];
      const queryStub = 'QUERY_STUB';
      fetchMock.mockResponseOnce(JSON.stringify({Search: moviesStub}), {status: 200});
      await expect(OMDb.search(queryStub)).resolves.toEqual({isSuccess: true, movies: moviesStub});
    });

    it('returns fail when fetch failed', async () => {
      const queryStub = 'QUERY_STUB';
      fetchMock.mockResponseOnce('', {status: 400});
      await expect(OMDb.search(queryStub)).resolves.toEqual({isSuccess: false});
    });
  });
});
