import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FTPGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export const freeToPlayApi = createApi({
  reducerPath: 'freeToPlayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.freetogame.com/api' }),
  endpoints: (builder) => ({
    getGames: builder.query<FTPGame[], void>({
      query: () => '/games?limit=20',
    }),
    getGameById: builder.query<FTPGame, number>({
      query: (id: number) => `/game?id=${id}`,
    }),
    getGamesByGenre: builder.query<FTPGame[], string>({
      query: (genre: string) => `games?genre=${genre}`,
    }),
  }),
});

export const { useGetGamesQuery, useGetGameByIdQuery, useGetGamesByGenreQuery } = freeToPlayApi;
