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

export const userLogin = (
  formData,
  navigate,
  setFieldError,
  setSubmitting,
  setIsLoading
) => {
  console.log(formData);
  return async (dispatch) => {
    dispatch(loginRequest());
    setIsLoading(true);
    await instance
      .post('http://localhost:5000/users/signin', formData)
      .then((response) => {
        setIsLoading(false);
        const { data } = response;
        if (data.status === 'FAILED') {
          const { message } = data;
          console.log(message);
          //check for the exact error
          if (message.includes('credentials')) {
            setFieldError('email', message);
            setIsLoading(false);
            setFieldError('password', message);
          } else if (message.includes('password')) {
            setFieldError('password', message);
            setIsLoading(false);
          } else {
            setFieldError('email', 'check your network settings');
            setFieldError('password', 'check your network settings');
          }
        } else if (data.status === 'SUCCESS') {
          dispatch(loginSuccess(data));
          window.localStorage.setItem('user', JSON.stringify(data.data));
          window.localStorage.removeItem('email')
          navigate('/dashboard');
        }
        setSubmitting(false);
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};
