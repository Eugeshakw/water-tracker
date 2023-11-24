import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://water-tracker-pce2.onrender.com/',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = ` Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const addWater = async (data, token) => {
  setAuthHeader(token);

  const response = await instance.post(`api/water/`, data);

  return response;
};

export const editWater = async (data, token, id) => {
  setAuthHeader(token);
  if (data.hasOwnProperty('id')) {
    delete data.id;
  }

  const response = await instance.patch(`api/water/${id}`, data);
  return response;
};
export const getWater = async token => {
  setAuthHeader(token);

  const response = await instance.get(`api/water/today`);

  return response;
};
export const getMonthWater = async token => {
  setAuthHeader(token);

  const response = await instance.get(`api/water/month`);

  return response;
};

export const deleteWaterById = async (token, id) => {
  setAuthHeader(token);

  const response = await instance.delete(`api/water/${id}`);

  return response;
};
