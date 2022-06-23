import axios from 'axios';
import {
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
} from '../actionTypes/actionTypes';
import { turnModalOn } from './modalTurnOnActions';
//create axios instance
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export const forgotPasswordAction = (
  formData,
  navigate,
  setFieldError,
  setSubmitting,
  setIsLoading
) => {
  return async (dispatch) => {
    dispatch(forgotPasswordRequest());
    setIsLoading(true);
    await instance
      .post('http://localhost:5000/users/requestpasswordreset', formData)
      .then(({ data: respData }) => {
        console.log(respData);
        if (respData.status === 'FAILED') {
          const { message } = respData;
          if (message.toLowerCase().includes('email')) {
            setFieldError('email', message);
            setIsLoading(false);
          }
        } else if (respData.status === 'PENDING') {
          const { data } = respData;
          console.log(data);
          dispatch(turnModalOn(true));
          dispatch(forgotPasswordSuccess(data));
          window.localStorage.setItem('resetEmail', data);
          setIsLoading(false);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        dispatch(forgotPasswordFailure(error));
        setIsLoading(false);
      });
  };
};
