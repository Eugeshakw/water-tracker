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
  state.monthWaters = payload
 ;
};

export const onDelete = (state, { payload }) => {
  const index = state.waters.findIndex(water => water._id === payload.id);
  
  state.waters.splice(index, 1);
  
  state.percentage = payload.percentageUsedRounded;
};
