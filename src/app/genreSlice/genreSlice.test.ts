import { configureStore } from '@reduxjs/toolkit';
import genreSlice, { selectGenre } from './genreSlice';

const store = configureStore({
  reducer: {
    genre: genreSlice,
  },
});

describe('genreSlice', () => {
  it('should have initial state with empty selectedGenre', () => {
    const state = store.getState().genre;
    expect(state.selectedGenre).toEqual('');
  });

  it('should update selectedGenre when selectGenre action is dispatched', () => {
    store.dispatch(selectGenre('Action'));
    const state = store.getState().genre;
    expect(state.selectedGenre).toEqual('Action');
  });

  it('should set selectedGenre back to empty when selectGenre is dispatched with an empty string', () => {
    store.dispatch(selectGenre(''));
    const state = store.getState().genre;
    expect(state.selectedGenre).toEqual('');
  });
});
