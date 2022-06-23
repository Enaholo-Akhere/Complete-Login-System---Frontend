import * as constants from '../constants/modalConstants';

const initialState = false;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.TURN_ON_MODAL:
      return (state = action.payload);

    case constants.TURN_OFF_MODAL:
      return (state = action.payload);
    default:
      return state;
  }
};
export default modalReducer;
