export const onAddWater = (state, { payload }) => {
  state.waters.push(payload);
};

export const onEditWater = (state, { payload }) => {
  state.waters.push(payload);
};
export const onGetAllWater = (state, { payload }) => {
  state.waters = payload.waterRecords;
  state.percentage = payload.percentageUsedRounded;
};
export const onGetMonthWater = (state, { payload }) => {
  state.monthWaters = payload.waterRecords;
  state.monthWaters = payload.percentageUsedRounded;
};
