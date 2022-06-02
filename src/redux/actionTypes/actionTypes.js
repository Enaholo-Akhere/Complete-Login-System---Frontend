import * as constants from '../constants/userconstants';

export const signupRequest = () => {
    return {
        type: constants.REQUEST_SIGNUP_LOADING,
    }
}

export const signupSuccess = (user) => {
    return {
        type: constants.REQUEST_SIGNUP_SUCCESS,
        payload: user,
    }
}

export const signupFailed = (failed) => {
    return {
        type: constants.REQUEST_SIGNUP_FAILURE,
        payload: failed,
    }
}

export const loginRequest = () => {
    return {
        type: constants.REQUEST_LOGIN_LOADING,
    }
}

export const loginSuccess = (user) => {
    return {
        type: constants.REQUEST_LOGIN_SUCCESS,
        payload: user,
    }
}

export const loginFailed = (failed) =>{
    return {
        type: constants.REQUEST_LOGIN_FAILURE,
        payload: failed
    }
}