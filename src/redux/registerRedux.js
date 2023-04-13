import { createSlice } from '@reduxjs/toolkit'

const registerSlice = createSlice({
    name:"register",
    initialState:{
        isAuthenticated: false,
        user: null,
        error: null,
    },
    reducers: {
        registerUserSuccess: (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload;
          state.error = null;
        },
        registerUserFailed: (state, action) => {
          state.isAuthenticated = false;
          state.user = null;
          state.error = action.payload;
        },
      },
    });

export const { registerUserSuccess, registerUserFailed } = registerSlice.actions;
export default registerSlice.reducer;