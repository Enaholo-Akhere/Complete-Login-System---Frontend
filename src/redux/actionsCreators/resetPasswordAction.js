import * as api from '../../api/apirequests';
import {
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} from '../actionTypes/actionTypes';
import { turnModalOn } from './modalTurnOnActions';

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
    await api
      .resetPassword(formData)
      .then(({ data: respData }) => {
        if (respData.status === 'FAILED') {
          const { message } = respData;
          if (message.toLowerCase().includes('password')) {
            setFieldError('newPassword', message);
            setIsLoading(false);
          }
        } else if (respData.status === 'SUCCESS') {
          const { message } = respData;
          dispatch(turnModalOn(true));
          dispatch(resetPasswordSuccess(message));
          window.localStorage.setItem('resetMessage', message);
          setIsLoading(false);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        dispatch(resetPasswordFailure(error));
        setIsLoading(false);
      });
  };
};
