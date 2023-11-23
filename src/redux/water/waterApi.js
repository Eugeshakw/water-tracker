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
  console.log(response);
  return response;
};

export const editWater = async (data, token, id) => {
  setAuthHeader(token);
  if (data.hasOwnProperty('id')) {
    delete data.id;
  }
  console.log(id);

  const response = await instance.patch(`api/water/${id}`, data);
  return response;
  // console.log(response);
};
export const getWater = async token => {
  setAuthHeader(token);

  const response = await instance.get(`api/water/today`);
  console.log(response);
  return response;
  // console.log(response);
};
export const getMonthWater = async token => {
  setAuthHeader(token);

  const response = await instance.get(`api/water/month`);
  console.log(response);
  return response;
  // console.log(response);
};
