import * as actionTypes from '../actionTypes/modalTypes';

export const turnModalOn = (turnOn) => {
  return actionTypes.turnOnModal(turnOn);
};

export const turnModalOff = (turnOff) => {
  return actionTypes.turnOffModal(turnOff);
};
