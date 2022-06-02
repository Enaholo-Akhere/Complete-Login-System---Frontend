import * as constants from '../constants/userconstants'

const initials = {
    loading: false,
    failure: "",
    success: false,
    data: []
}

const userReducer = (state = initials, action) => {
    switch(action.type){
        case constants.REQUEST_SIGNUP_LOADING:
            return {
                loading: true,
                failure: '',
                success: false,
                data: [],
            };
        case constants.REQUEST_SIGNUP_SUCCESS:
            return {
            loading: false,
            failure: "",
            success: true,
            data: action.payload,
            };
        case constants.REQUEST_SIGNUP_FAILURE:
            return {
            loading: false,
            failure: action.payload,
            success: false,
            data: [],
            };
        default:
            return state
    }
}

export default userReducer;