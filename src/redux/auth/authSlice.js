import { createSlice } from '@reduxjs/toolkit';
import {
  logOutThunk,
  signUpThunk,
  signInThunk,
  refreshUserThunk,
  resetPasswordThunk,
} from './auth-operations.js';
import {
  handleAuth,
  handleLogout,
  handlePendingRefresh,
  handleRefresh,
  handleRefreshReject,
} from './handlers.js';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogIn: false,
  isLoading: false,
  error: false,
  isRefreshing: false,
  alert: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleAuth)
      .addCase(signInThunk.fulfilled, handleAuth)
      .addCase(logOutThunk.fulfilled, handleLogout)
      .addCase(refreshUserThunk.pending, handlePendingRefresh)
      .addCase(refreshUserThunk.fulfilled, handleRefresh)
      .addCase(refreshUserThunk.rejected, handleRefreshReject)
      .addCase(resetPasswordThunk.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;
