import React from 'react';
import ReactDom from 'react-dom';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { turnModalOff } from '../redux/actionsCreators/modalTurnOnActions';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.modal);
  console.log(show);
  if (show === false) return null;
  return ReactDom.createPortal(
    <>
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0, 0.7)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            maxWidth: 900,
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 1000,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Box
            onClick={() => dispatch(turnModalOff(false))}
            sx={{
              display: 'flex',
              justifyContent: 'center',

              fontWeight: 600,
              color: 'white',
            }}
          >
            <CloseIcon
              onClick={() => dispatch(turnModalOff(false))}
              sx={{ cursor: 'pointer', marginTop: -10, fontSize: 30}}
            />
          </Box>
          {children}
        </Box>
      </Box>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
