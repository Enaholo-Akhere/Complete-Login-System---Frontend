import React from 'react';
import ReactDom from 'react-dom';
import Box from '@mui/material/Box';

const Modal = ({ children, userEmail }) => {
  if (!userEmail) return null;
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
          zIndex: 1000,
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
          {children}
        </Box>
      </Box>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
