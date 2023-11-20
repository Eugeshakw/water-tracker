export const handleAuth = (state, { payload }) => {
  state.user.email = payload.email;
};
export const handleLogIn = (state, { payload }) => {
  state.user.email = payload.user.email;
};
export const handleLogout = (state, { payload }) => {
  state.user = {};
  state.token = null;
};

export const handlePendingRefresh = (state, { payload }) => {
  state.isRefreshing = true;
};

export const handleRefresh = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = false;
};

export const handleRefreshReject = (state, { payload }) => {
  state.user = {};
  state.token = null;
  state.isRefreshing = true;
};

export const handleAvatar = (state, { payload }) => {
  state.user.avatarURL = payload;
};

export const handleUpdate = (state, { payload }) => {
  console.log(payload);
  state.user.email = payload.email;
  state.user.name = payload.name;
  state.user.gender = payload.gender;
  state.user.avatarURL = payload.avatarURL;
};
