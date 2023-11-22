import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  //   isOpenModalSetting: false,
  //   isOpenModalWaterRate: false,
  //   isOpenDeleteEntryModal: false,
  isOpenModal: true,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setOpenModal: (state, { payload }) => {
      state.isOpenModal = payload;
    },
    // isOpenSettings: (state, { payload }) => {
    //   state.isOpenModalSetting = payload;
    // },
    // isOpenDeleteEntryModal: (state, { payload }) => {
    //   state.isOpenDeleteEntryModal = payload;
    // },
  },
});

export const modalReducer = modalSlice.reducer;
export const { setOpenModal } = modalSlice.actions;
