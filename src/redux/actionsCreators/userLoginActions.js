import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginFailed,
} from '../actionTypes/actionTypes';

//create axios instance
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export const userLogin = (formData, navigate) => {
  console.log(formData);
  return async (dispatch) => {
    dispatch(loginRequest());
    await instance
      .post('http://localhost:5000/users/signin', formData)
      .then((response) => {
        const { data } = response;
        dispatch(loginSuccess(data));
        window.localStorage.setItem('user', JSON.stringify(data.data));
        navigate('/dashboard')
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};
