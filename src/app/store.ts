import { configureStore } from '@reduxjs/toolkit';
import { freeToPlayApi } from './api/freeToPlayapi';
import gamelistReducer from './gamelistSlice/gamelistSlice';
import genreReducer from './genreSlice/genreSlice';
import loginReducer from './loginSlice/loginSlice';

export const store = configureStore({
  reducer: {
    gamelist: gamelistReducer,
    genre: genreReducer,
    login: loginReducer,
    [freeToPlayApi.reducerPath]: freeToPlayApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(freeToPlayApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
