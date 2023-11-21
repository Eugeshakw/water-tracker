import { createSlice } from '@reduxjs/toolkit';
import {
  logOutThunk,
  signUpThunk,
  signInThunk,
  refreshUserThunk,
  resetPasswordThunk,
  updateAvatarThunk,
  updateProfileThunk,
} from './auth-operations.js';
import {
  handleAuth,
  handleAvatar,
  handleLogIn,
  handleLogout,
  handlePendingRefresh,
  handleRefresh,
  handleRefreshReject,
  handleSignError,
  handleUpdate,
} from './handlers.js';

const initialState = {
  user: { name: null, email: null, gender: null, avatarURL: '', id: null },
  token: null,
  isLogIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
  alert: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleAuth)
      .addCase(signInThunk.fulfilled, handleLogIn)
      .addCase(signUpThunk.rejected, handleSignError)
      .addCase(signInThunk.rejected, handleSignError)
      .addCase(logOutThunk.fulfilled, handleLogout)
      .addCase(refreshUserThunk.pending, handlePendingRefresh)
      .addCase(refreshUserThunk.fulfilled, handleRefresh)
      .addCase(refreshUserThunk.rejected, handleRefreshReject)
      .addCase(resetPasswordThunk.fulfilled, handleLogout)
      .addCase(updateAvatarThunk.fulfilled, handleAvatar)
      .addCase(updateProfileThunk.fulfilled, handleUpdate);
  },
});

export const authReducer = authSlice.reducer;
