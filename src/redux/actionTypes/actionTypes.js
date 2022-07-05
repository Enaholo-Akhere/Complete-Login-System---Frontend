import * as constants from '../constants/userconstants';

//SIGNUP REQUEST
export const signupRequest = () => {
  return {
    type: constants.REQUEST_SIGNUP_LOADING,
  };
};

export const signupSuccess = (user) => {
  return {
    type: constants.REQUEST_SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signupFailed = (failed) => {
  return {
    type: constants.REQUEST_SIGNUP_FAILURE,
    payload: failed,
  };
};

//LOGIN REQUEST
export const loginRequest = () => {
  return {
    type: constants.REQUEST_LOGIN_LOADING,
  };
};

export const loginSuccess = (user) => {
  return {
    type: constants.REQUEST_LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailed = (failed) => {
  return {
    type: constants.REQUEST_LOGIN_FAILURE,
    payload: failed,
  };
};

//FORGOTPASSWORD REQUEST
export const forgotPasswordRequest = () => {
  return {
    type: constants.REQUEST_FORGOTPASSWORD_LOADING,
  };
};

export const forgotPasswordSuccess = (data) => {
  return {
    type: constants.REQUEST_FORGOTPASSWORD_SUCCESS,
    payload: data,
  };
};

export const forgotPasswordFailure = (error) => {
  return {
    type: constants.REQUEST_FORGOTPASSWORD_FAILURE,
    payload: error,
  };
};


//reset password
export const resetPasswordRequest = () => {
  return {
    type: constants.REQUEST_RESETPASSWORD_LOADING,
  };
};

export const resetPasswordSuccess = (data) => {
  return {
    type: constants.REQUEST_RESETPASSWORD_SUCCESS,
    payload: data,
  };
};

export const resetPasswordFailure = (error) => {
  return {
    type: constants.REQUEST_RESETPASSWORD_FAILURE,
    payload: error,
  };
};

//delete account
export const deleteAccountRequest = () => {
  return {
    type: constants.REQUEST_DELETEACCOUNT_LOADING,
  }
}

export const deleteAccountSuccess = (data) => {
  return {
    type: constants.REQUEST_DELETEACCOUNT_SUCCESS,
    payload: data
  }
}

export const deleteAccountFailure = (error) => {
  return {
    type: constants.REQUEST_DELETEACCOUNT_FAILURE,
    payload: error
  }
}