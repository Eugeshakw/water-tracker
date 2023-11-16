export const handleAuth = (state, { payload }) => {
    state.token = payload.token;
    state.user = payload.user;
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


