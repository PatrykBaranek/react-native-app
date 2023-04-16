import { configureStore, nanoid } from '@reduxjs/toolkit';
import gamelistSlice, {
  addGameToCatalog,
  createNewCatalog,
  removeCatalog,
  removeGameFromCatalog,
  reset,
} from './gamelistSlice';
import { FTPGame } from '../api/freeToPlayapi';

const store = configureStore({ reducer: { gamelist: gamelistSlice } });

describe('gamelistSlice', () => {
  beforeEach(() => {
    store.dispatch(reset());
  });

  it('should create a new catalog', () => {
    const catalogName = 'New Catalog';
    store.dispatch(createNewCatalog(catalogName));
    const state = store.getState().gamelist;

    expect(state.catalogs.length).toBe(2);
    expect(state.catalogs[1].name).toBe(catalogName);
  });

  it('should not create a new catalog with a duplicate name', () => {
    const catalogName = 'Favorites';
    store.dispatch(createNewCatalog(catalogName));
    const state = store.getState().gamelist;

    expect(state.catalogs.length).toBe(1);
  });

  it('should remove a catalog by id', () => {
    const catalogId = store.getState().gamelist.catalogs[0].id;
    store.dispatch(removeCatalog(catalogId));
    const state = store.getState().gamelist;

    expect(state.catalogs.find((c) => c.id === catalogId)).toBeUndefined();
  });

  it('should add a game to a catalog', () => {
    const catalogId = store.getState().gamelist.catalogs[0].id;
    const game: FTPGame = {
      id: 1,
      title: 'Game Title',
      thumbnail: 'https://www.google.com',
      developer: 'Game Developer',
      publisher: 'Game Publisher',
      short_description: 'Game Description',
      game_url: 'https://www.google.com',
      genre: 'Game Genre',
      platform: 'Game Platform',
      freetogame_profile_url: 'https://www.google.com',
      release_date: 'Game Release Date',
    };
    store.dispatch(addGameToCatalog({ catalogId, game }));
    const state = store.getState().gamelist;

    expect(state.catalogs[0].games.length).toBe(1);
    expect(state.catalogs[0].games[0]).toMatchObject(game);
  });

  it('should remove a game from a catalog', () => {
    const catalogId = store.getState().gamelist.catalogs[0].id;
    const game: FTPGame = {
      id: 1,
      title: 'Game Title',
      thumbnail: 'https://www.google.com',
      developer: 'Game Developer',
      publisher: 'Game Publisher',
      short_description: 'Game Description',
      game_url: 'https://www.google.com',
      genre: 'Game Genre',
      platform: 'Game Platform',
      freetogame_profile_url: 'https://www.google.com',
      release_date: 'Game Release Date',
    };
    store.dispatch(addGameToCatalog({ catalogId, game }));
    store.dispatch(removeGameFromCatalog({ catalogId, gameId: game.id }));
    const state = store.getState().gamelist;

    expect(state.catalogs[0].games.length).toBe(0);
  });
});
