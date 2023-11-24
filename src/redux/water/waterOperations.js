import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addWater,
  deleteWaterById,
  editWater,
  getMonthWater,
  getWater,
} from './waterApi.js';

export const addWaterThunk = createAsyncThunk(
  'user/addWater',
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await addWater(data, token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editAmountThunk = createAsyncThunk(
  'user/editWater',
  async (data, { rejectWithValue }) => {
    try {
      const { id } = data;
      const token = localStorage.getItem('token');
      const res = await editWater(data, token, id);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getAllWater = createAsyncThunk(
  'user/getTodayWater',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await getWater(token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getWaterMonth = createAsyncThunk(
  'user/getMonthWater',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await getMonthWater(token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'user/deleteWater',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await deleteWaterById(token, id);

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
