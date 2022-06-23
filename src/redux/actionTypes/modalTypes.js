import * as modalConstant from '../constants/modalConstants';

export const turnOnModal = (value) => {
     return {
          type: modalConstant.TURN_ON_MODAL,
          payload: value,
     }
}

export const turnOffModal = (value) => {
    return {
         type: modalConstant.TURN_OFF_MODAL,
         payload: value,
    }
}