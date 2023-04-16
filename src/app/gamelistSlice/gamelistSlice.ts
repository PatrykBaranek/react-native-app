import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

export type CatalogType = { id: string; name: string; games: GamesType[] };
export type GamesType = { id: number; title: string; genre: string; addDate?: string };

interface InitialState {
  catalogs: CatalogType[];
}

const initialState: InitialState = {
  catalogs: [
    {
      id: nanoid(),
      name: 'Favorites',
      games: [],
    },
  ],
};

const gamelistSlice = createSlice({
  name: 'gamelist',
  initialState,
  reducers: {
    createNewCatalog: (state, action: PayloadAction<string>) => {
      const catalogNameExists = state.catalogs.some((catalog) => catalog.name === action.payload);

      if (catalogNameExists) {
        return;
      }

      const newCatalog: CatalogType = {
        id: nanoid(),
        name: action.payload,
        games: [],
      };

      state.catalogs.push(newCatalog);
    },
    removeCatalog: (state, action: PayloadAction<string>) => {
      const catalogIndex = state.catalogs.findIndex((catalog) => catalog.id === action.payload);

      if (catalogIndex === -1) {
        return;
      }

      state.catalogs.splice(catalogIndex, 1);
    },
    addGameToCatalog: (state, action: PayloadAction<{ catalogId: string; game: GamesType }>) => {
      const catalog = state.catalogs.find((catalog) => catalog.id === action.payload.catalogId);

      if (catalog) {
        catalog.games.push({ ...action.payload.game, addDate: new Date().toISOString() });
      }
    },
    removeGameFromCatalog: (
      state,
      action: PayloadAction<{ catalogId: string; gameId: number }>
    ) => {
      const { catalogId, gameId } = action.payload;
      const catalog = state.catalogs.find((catalog) => catalog.id === catalogId);

      if (catalog) {
        catalog.games = catalog.games.filter((game) => game.id !== gameId);
      }
    },
    reset(state) {
      state.catalogs = initialState.catalogs;
    },
  },
});

export const { createNewCatalog, removeCatalog, addGameToCatalog, removeGameFromCatalog, reset } =
  gamelistSlice.actions;
export default gamelistSlice.reducer;
