import { configureStore } from '@reduxjs/toolkit';
import loginSlice, { login, logout } from './loginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

describe('loginSlice', () => {
  it('should have initial state with isAuthenticated as false and empty login', () => {
    const state = store.getState().login;
    expect(state.isAuthenticated).toEqual(false);
    expect(state.login).toEqual('');
  });

  it('should update login and isAuthenticated when login action is dispatched', () => {
    store.dispatch(login('testuser'));
    const state = store.getState().login;
    expect(state.isAuthenticated).toEqual(true);
    expect(state.login).toEqual('testuser');
  });

  it('should set isAuthenticated to false and empty login when logout is dispatched', () => {
    store.dispatch(logout());
    const state = store.getState().login;
    expect(state.isAuthenticated).toEqual(false);
    expect(state.login).toEqual('');
  });
});
