import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FTPGame } from '../api/freeToPlayapi';

type GamesType = { id: number; title: string };

interface initialState {
  games: GamesType[];
}

const initialState: initialState = {
  games: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addGameToWishlist: (state, action: PayloadAction<FTPGame>) => {
      const existingGame = state.games.find((game) => game.id === action.payload.id);
      if (!existingGame) {
        state.games.push({
          id: action.payload.id as number,
          title: action.payload.title as string,
        });
      }
    },
    removeGameFromWishlist: (state, action: PayloadAction<FTPGame>) => {
      const gameToRemove = state.games.find((game) => game.id === action.payload.id);

      state.games = state.games.filter((game) => game.id !== gameToRemove?.id);
    },
  },
});

export const { addGameToWishlist, removeGameFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;