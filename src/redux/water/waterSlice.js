import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterThunk,
  deleteWater,
  editAmountThunk,
  getAllWater,
  getWaterMonth,
} from './waterOperations.js';
import {
  onAddWater,
  onDelete,
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
      .addCase(addWaterThunk.fulfilled, onAddWater)
      .addCase(deleteWater.fulfilled, onDelete);
  },
});

export const waterReducer = waterSlice.reducer;
