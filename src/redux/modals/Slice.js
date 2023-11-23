import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  modalType: '',
  isOpenModal: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setOpenModal: (state, { payload }) => {
      state.isOpenModal = payload;
    },
    setModalType: (state, { payload }) => {
      state.modalType = payload;
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
export const { setOpenModal, setModalType } = modalSlice.actions;
