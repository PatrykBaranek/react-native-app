import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  login: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.login = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
