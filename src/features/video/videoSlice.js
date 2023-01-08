import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentVideo: null,
  loading: true,
  error: false
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload; // action payload can get data from user
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        // * only can use push & splice method in redux toolkit
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex((userId) => userId === action.payload),
          1
        );
      }
    },
    dislike: (state, action) => {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        // * only can use push & splice method in redux toolkit
        state.currentVideo.dislikes.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex((userId) => userId === action.payload),
          1
        );
      }
    }
  }
});

export const { fetchFailure, fetchSuccess, dislike, like } = videoSlice.actions;

export default videoSlice.reducer;
