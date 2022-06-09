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

export const userSignUp = (
  formData,
  navigate,
  setFieldError,
  setSubmitting,
  setIsLoading
) => {
  return async (dispatch) => {
    dispatch(signupRequest());
    setIsLoading(true);
    await instance
      .post('http://localhost:5000/users/signup', formData)
      .then(({ data: respData }) => {
        if (respData.status === 'FAILED') {
          const { message } = respData;
          if (message.toLowerCase().includes('email')) {
            setFieldError('email', message);
            setIsLoading(false);
          } else if (message.toLowerCase().includes('data')) {
            setFieldError('dateOfBirth', message);
            setIsLoading(false);
          } else if (message.toLowerCase().includes('name')) {
            setFieldError('name', message);
            setIsLoading(false);
          } else if (message.toLowerCase().includes('password')) {
            setFieldError('password', message);
            setIsLoading(false);
          }else if(message.toLowerCase().includes('checking for existing user')){
            setFieldError('email', message);
            setFieldError('name', message);
            setFieldError('password', message);
            setFieldError('dateOfBirth', message)
            setIsLoading(false);
          }
        } else if (respData.status === 'SUCCESS') {
          const { data } = respData;
          console.log(data);
          dispatch(signupSuccess(data));
          window.localStorage.setItem('user', JSON.stringify(data));
          navigate('/dashboard');
          setIsLoading(false);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        dispatch(signupFailed(error));
        setIsLoading(false);
      });
  };
};
