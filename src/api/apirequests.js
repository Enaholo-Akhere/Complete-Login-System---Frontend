import axios from 'axios';

//instance with development
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_URL_PROD
    : process.env.REACT_APP_BASE_URL_DEV;

export const registerUsers = async (formData) => {
  return await instance.post(`${baseUrl}/users/signup`, formData);
};

export const loginUsers = async (formData) => {
  return await instance.post(`${baseUrl}/users/signin`, formData);
};

//forgot password
export const forgotPassword = async (formData) => {
  return await instance.post(`${baseUrl}/users/requestpasswordreset`, formData);
};

//reset password
export const resetPassword = async (formData) => {
  return await instance.post(`${baseUrl}/users/resetpassword`, formData);
};

//delete account
export const deleteAccount = async (formData) => {
  console.log(formData);
  return await instance.delete(
    `${baseUrl}/users/deleteaccount`,
    { data: formData },
    {}
  );
};
