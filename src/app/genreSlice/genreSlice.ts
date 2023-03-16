import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  selectedGenre: string;
}

const initialState: InitialStateType = {
  selectedGenre: '',
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    selectGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { selectGenre } = genreSlice.actions;
export default genreSlice.reducer;
