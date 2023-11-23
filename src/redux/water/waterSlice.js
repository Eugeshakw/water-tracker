import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterThunk,
  editAmountThunk,
  getAllWater,
  getWaterMonth,
} from './waterOperations.js';
import {
  onAddWater,
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
      .addCase(getWaterMonth.fulfilled, onGetMonthWater)
      .addCase(addWaterThunk.fulfilled, onAddWater);
  },
});

export const waterReducer = waterSlice.reducer;
