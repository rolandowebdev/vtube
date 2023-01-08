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
    },
    subscription: (state, action) => {
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        state.currentUser.subscribedUsers.splice(
          state.currentUser.subscribedUsers.findIndex((channelId) => channelId === action.payload),
          1
        );
      } else {
        state.currentUser.subscribedUsers.push(action.payload);
      }
    }
  }
});

export const { loginSuccess, loginFailure, logout, subscription } = userSlice.actions;

export default userSlice.reducer;
