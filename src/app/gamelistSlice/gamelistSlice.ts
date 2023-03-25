import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

export type CatalogType = { id: string; name: string; games: GamesType[] };
export type GamesType = { id: number; title: string; genre: string; addDate?: string };

interface initialState {
  catalogs: CatalogType[];
}

const initialState: initialState = {
  catalogs: [
    {
      id: '1',
      name: 'Wishlist',
      games: [],
    },
    {
      id: '2',
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
      const newCatalog = {
        id: nanoid(),
        name: action.payload,
        games: [],
      };

      if (state.catalogs.find((catalog) => catalog.name === action.payload)) {
        console.warn('Catalog with this name already exists');
        return;
      }

      state.catalogs.push(newCatalog);
    },
    removeCatalog: (state, action: PayloadAction<string>) => {
      const catalogToDelete = state.catalogs.find((catalog) => catalog.id === action.payload);

      if (!catalogToDelete) {
        console.warn('Catalog with this id does not exist');
        return;
      }

      state.catalogs = state.catalogs.filter((catalog) => catalog.id !== action.payload);
    },
    addGameToCatalog: (state, action: PayloadAction<{ catalogId: string; game: GamesType }>) => {
      state.catalogs
        .find((catalog) => catalog.id === action.payload.catalogId)
        ?.games.push({ ...action.payload.game, addDate: new Date().toISOString() });
    },
    removeGameFromCatalog: (
      state,
      action: PayloadAction<{ catalogId: string; gameId: number }>
    ) => {
      const { catalogId, gameId } = action.payload;
      const catalog = state.catalogs.find((catalog) => catalog.id === catalogId);

      if (catalog) {
        const updatedGames = catalog.games.filter((game) => game.id !== gameId);
        catalog.games = updatedGames;
      }
    },
  },
});

export const { createNewCatalog, removeCatalog, addGameToCatalog, removeGameFromCatalog } =
  gamelistSlice.actions;
export default gamelistSlice.reducer;
