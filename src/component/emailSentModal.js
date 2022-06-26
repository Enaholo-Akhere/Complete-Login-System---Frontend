import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const EmailSent = () => {
  const resetEmail = window.localStorage.getItem('resetEmail');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
    window.localStorage.setItem('email', resetEmail);
    window.localStorage.removeItem('resetEmail');
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 3,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <Typography variant='h3' textAlign={'center'}>
          Password Reset
        </Typography>
        <Typography variant='body1' textAlign={'center'}>
          Reset link sent to
          <Typography variant='h3' sx={{ fontWeight: 700, fontSize: 20 }}>
            {resetEmail}
          </Typography>
          It will expire in 60 minutes
        </Typography>
        <Button
          variant='contained'
          endIcon={<ArrowRightAltIcon />}
          onClick={handleClick}
          sx={{
            marginTop: 3,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Home
        </Button>
      </Box>
    </>
  );
};

export default EmailSent;
