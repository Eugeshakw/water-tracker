import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  signup,
  signin,
  signout,
  refreshUser,
  resetPassword,
} from 'service/api/authApi.js';

export const signUpThunk = createAsyncThunk(
  '/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signup(body);
      return data;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(
            `This email is already in use by another user. Please try a different address.`
          );
          return rejectWithValue(error.massage);
        case 400:
          toast.error(
            `The password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character`
          );
          return rejectWithValue(error.massage);

        default:
          return rejectWithValue(error.message);
      }
    }
  }
);

export const signInThunk = createAsyncThunk(
  '/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signin(body);
      return data;
    } catch (error) {
      toast.error(`Email or password is wrong. Try again =)`);
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  '/signout',
  async (_, { rejectWithValue }) => {
    try {
      await signout();
      return;
    } catch (error) {
      toast.error(`Error! User not logged in!`);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  '/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const data = await refreshUser(token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const {
        auth: { token },
      } = thunkApi.getState();
      if (!token) {
        return false;
      }
    },
  }
);

export const resetPasswordThunk = createAsyncThunk(
  '/resetPassword',
  async (body, { rejectWithValue }) => {
    try {
      await resetPassword(body);
    } catch (error) {
      toast.error(`Error! User with this email not found!`);
      return rejectWithValue(error.message);
    }
  }
);