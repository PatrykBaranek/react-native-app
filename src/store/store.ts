import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { freeToPlayApi } from '../api/freeToPlayapi';

export const store = configureStore({
  reducer: {
    [freeToPlayApi.reducerPath]: freeToPlayApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(freeToPlayApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
