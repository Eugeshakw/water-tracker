import axios from 'axios';

export const instance = axios.create({ baseURL: 'localhost:1111' });

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer${token}`;
  localStorage.setItem('token', token);
};

const removeToken = () => {
  delete instance.defaults.headers.common['Authorization'];
  localStorage.removeItem('token');
};

export const signin = async body => {
  const { data } = await instance.post('/signin', body);
  setToken(data.token);
  return data;
};

export const signup = async body => {
  const { data } = await instance.post('/signup', body);
  setToken(data.token);
  return data;
};

export const signout = async () => {
  await instance.post('/signout');
  removeToken();
};

export const refreshUser = async token => {
  setToken(token);
  const { data } = await instance.get('/current');
  return data;
};

export const resetPassword = async (resetToken, newPassword) => {
  const { data } = await instance.post(`/resetPassword/${resetToken}`, {
    newPassword,
  });
  setToken(data.token);
  return data;
};
