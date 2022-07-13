import * as api from '../../api/apirequests';
import {
  loginRequest,
  loginSuccess,
  loginFailed,
} from '../actionTypes/actionTypes';

export const userLogin = (
  formData,
  navigate,
  setFieldError,
  setSubmitting,
  setIsLoading
) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    setIsLoading(true);
    await api
      .loginUsers(formData)
      .then((response) => {
        setIsLoading(false);
        const { data } = response;
        if (data.status === 'FAILED') {
          const { message } = data;
          //check for the exact error
          if (message.includes('credentials')) {
            setFieldError('email', message);
            setIsLoading(false);
            setFieldError('password', message);
          } else if (message.includes('password')) {
            setFieldError('password', message);
            setIsLoading(false);
          } else if (message.toLowerCase().includes('email')) {
            setFieldError('email', message);
          }
        } else if (data.status === 'SUCCESS') {
          dispatch(loginSuccess(data));
          window.localStorage.setItem('user', JSON.stringify(data.data));
          window.localStorage.removeItem('email');
          navigate('/dashboard');
        }
        setSubmitting(false);
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};
