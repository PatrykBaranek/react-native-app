import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
});
