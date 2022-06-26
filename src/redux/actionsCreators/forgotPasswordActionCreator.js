import * as api from '../../api/apirequests';
import {
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
} from '../actionTypes/actionTypes';
import { turnModalOn } from './modalTurnOnActions';

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
    await api
      .forgotPassword(formData)
      .then(({ data: respData }) => {
        if (respData.status === 'FAILED') {
          const { message } = respData;
          if (message.toLowerCase().includes('email')) {
            setFieldError('email', message);
            setIsLoading(false);
          }
        } else if (respData.status === 'PENDING') {
          const { data } = respData;
          dispatch(turnModalOn(true));
          dispatch(forgotPasswordSuccess(data));
          window.localStorage.setItem('resetEmail', data);
          setIsLoading(false);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        dispatch(forgotPasswordFailure(error));
        setIsLoading(false);
      });
  };
};
