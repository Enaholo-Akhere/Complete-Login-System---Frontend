import React from 'react';
import ReactDom from 'react-dom';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import {
  turnModalOff,
  turnModalOn,
} from '../redux/actionsCreators/modalTurnOnActions';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.modal);
  if (!show) return null;
  return ReactDom.createPortal(
    <>
      <Box
        onClick={() => dispatch(turnModalOff(false))}
        sx={{
          backgroundColor: 'rgba(0,0,0, 0.7)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10
        }}
      >
        <Box
        onClick={() => dispatch(turnModalOn(true))}
          sx={{
            maxWidth: 900,
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 1000,
            transform: 'translate(-50%, -50%)',
            
          }}
        >
          {children}
        </Box>
      </Box>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
