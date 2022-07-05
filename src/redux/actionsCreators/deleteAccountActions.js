import * as api from '../../api/apirequests';
import {
  deleteAccountFailure,
  deleteAccountRequest,
  deleteAccountSuccess,
} from '../actionTypes/actionTypes';
import { turnModalOff } from './modalTurnOnActions';

export const deleteAccountAction = (
  formData,
  navigate,
  setFieldError,
  setSubmitting,
  setIsLoading
) => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  return async (dispatch) => {
    dispatch(deleteAccountRequest());
      setIsLoading(true);
    if (user.email !== formData.email) {
      dispatch(deleteAccountFailure('please enter your correct email'));
      setFieldError('email', 'please enter your correct email')
      setIsLoading(false)
    } else {
      dispatch(deleteAccountRequest());
      setIsLoading(true);
      await api
        .deleteAccount(formData)
        .then(({ data: respData }) => {
          if (respData.status === 'FAILED') {
            const { message } = respData;
            if (message.toLowerCase().includes('email')) {
              setFieldError('email', message);
              setIsLoading(false);
            } else if (message.toLowerCase().includes('unsuccessful')) {
              setFieldError('email', message);
              setIsLoading(false);
            }
          } else if (respData.status === 'SUCCESS') {
            const { message } = respData;
            console.log(message);
            dispatch(turnModalOff(false));
            dispatch(deleteAccountSuccess(message));
            setIsLoading(false);
            navigate('/');
          }
          setSubmitting(false);
        })
        .catch((error) => {
          dispatch(deleteAccountFailure(error));
          setIsLoading(false);
        });
    }
  };
};
