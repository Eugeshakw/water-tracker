import { createAsyncThunk } from '@reduxjs/toolkit';

import { editWater, getMonthWater, getWater } from './waterApi.js';

export const editAmountThunk = createAsyncThunk(
  'user/editWater',
  async (data, { rejectWithValue }) => {
    try {
      const { id } = data;
      const token = localStorage.getItem('token');
      const res = await editWater(data, token, id);
      console.log(data);
      console.log(res);
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
