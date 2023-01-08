import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: true,
  error: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload; // action payload can get data from user
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    }
  }
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
