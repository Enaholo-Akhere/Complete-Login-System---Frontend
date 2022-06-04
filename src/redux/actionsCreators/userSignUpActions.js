import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupFailed,
} from '../actionTypes/actionTypes';
//create axios instance
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export const userSignUp = (formData, navigate) => {
  return async (dispatch) => {
    dispatch(signupRequest());
    await instance
      .post('http://localhost:5000/users/signup', formData)
      .then((response) => {
        const { data } = response;
        dispatch(signupSuccess(data));
        window.localStorage.setItem('user', JSON.stringify(data));
        navigate('/dashboard')
      })
      .catch((error) => {
        dispatch(signupFailed(error));
      });
  };
};
