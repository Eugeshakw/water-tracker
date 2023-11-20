import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://water-tracker-pce2.onrender.com/',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer${token}`;
  localStorage.setItem('token', token);
};

const removeToken = () => {
  delete instance.defaults.headers.common['Authorization'];
  localStorage.removeItem('token');
};

export const signin = async body => {
  const { data } = await instance.post('api/auth/signin', body);
  setToken(data.token);
  console.log(data);
  return data;
};

export const signup = async body => {
  const { data } = await instance.post('api/auth/signup', body);
  setToken(data.token);
  console.log(data);
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

export const updateAvatar = async newPhotoFile => {
  const data = await instance.patch('api/auth/avatars', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWI2ZGFjMGU4MjcyYTZjY2IyMTU0MCIsImlhdCI6MTcwMDQ5MDcwNywiZXhwIjoxNzAwNTczNTA3fQ.goZUdYo4qPLoTOt8M2u01sSg6B_nri1HG31q41zzlBc'}`,
    },
  });

  return data.data.avatar;
};

export const updateUser = async updatedUser => {
  const data = await instance.patch(
    'api/auth/655b6dac0e8272a6ccb21540',
    updatedUser,
    {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWI2ZGFjMGU4MjcyYTZjY2IyMTU0MCIsImlhdCI6MTcwMDQ5MDcwNywiZXhwIjoxNzAwNTczNTA3fQ.goZUdYo4qPLoTOt8M2u01sSg6B_nri1HG31q41zzlBc'}`,
      },
    }
  );

  console.log(data);
  return data;
};
// export const updateAvatar = async PhotoFile => {};
