import { createSlice } from '@reduxjs/toolkit';
import {
  editAmountThunk,
  getAllWater,
  getWaterMonth,
} from './waterOperations.js';
import {
  onEditWater,
  onGetAllWater,
  onGetMonthWater,
} from './waterHandlers.js';

const initialState = {
  waters: [],
  monthWaters: [],
  percentage: null,
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(editAmountThunk.fulfilled, onEditWater)
      .addCase(getAllWater.fulfilled, onGetAllWater)
      .addCase(getWaterMonth.fulfilled, onGetMonthWater);
  },
});

export const waterReducer = waterSlice.reducer;
