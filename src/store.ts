import { configureStore } from '@reduxjs/toolkit';
import { freeToPlayApi } from './app/api/freeToPlayapi';
import wishlistReducer from './app/wishlistSlice/wishlistSlice';
import genreReducer from './app/genreSlice/genreSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    genre: genreReducer,
    [freeToPlayApi.reducerPath]: freeToPlayApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(freeToPlayApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
