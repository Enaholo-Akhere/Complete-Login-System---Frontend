import axios from 'axios';
import {
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} from '../actionTypes/actionTypes';
import { turnModalOn } from './modalTurnOnActions';
//create axios instance
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export const resetPasswordAction = (
  formData,
  navigate,
  setFieldError,
  setSubmitting,
  setIsLoading
) => {
  return async (dispatch) => {
    dispatch(resetPasswordRequest());
    setIsLoading(true);
    await instance
      .post('http://localhost:5000/users/resetpassword', formData)
      .then(({ data: respData }) => {
        console.log(respData);
        if (respData.status === 'FAILED') {
          const { message } = respData;
          if (message.toLowerCase().includes('password')) {
            setFieldError('newPassword', message);
            setIsLoading(false);
          }
        } else if (respData.status === 'SUCCESS') {
          const { message } = respData;
          console.log(message);
          dispatch(turnModalOn(true))
          dispatch(resetPasswordSuccess(message));
          window.localStorage.setItem('resetMessage', message);
          setIsLoading(false);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        dispatch(resetPasswordFailure(error));
        setIsLoading(false);
      });
  };
};
