//import axios from 'axios';
import * as api from '../../api/apirequests';
import {
  signupRequest,
  signupSuccess,
  signupFailed,
} from '../actionTypes/actionTypes';
import { turnModalOn } from './modalTurnOnActions';
//create axios instance
// const instance = axios.create({
//   baseURL: 'http://localhost:3000',
//   withCredentials: true,
// });

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
    await api
      .registerUsers(formData)
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
          } else if (
            message.toLowerCase().includes('checking for existing user')
          ) {
            setFieldError('email', message);
            setFieldError('name', message);
            setFieldError('password', message);
            setFieldError('dateOfBirth', message);
            setIsLoading(false);
          }
        } else if (respData.status === 'PENDING') {
          const { email } = respData;
          dispatch(turnModalOn(true));
          dispatch(signupSuccess());
          window.localStorage.setItem('userEmail', JSON.stringify(email));
          setIsLoading(false);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        dispatch(signupFailed(error));
        setIsLoading(false);
      });
  };
};
