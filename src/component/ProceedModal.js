import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const ProceedModal = () => {
  const userEmail = JSON.parse(window.localStorage.getItem('userEmail'));
  const navigate = useNavigate();
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
          Account Confirmation
        </Typography>
        <Typography variant='body1' textAlign={'center'}>
          A verification email has been sent to <b>{userEmail}</b>, please
          verify and click proceed
        </Typography>
        <Button
          variant='contained'
          endIcon={<ArrowRightAltIcon />}
          onClick={() => navigate('/signin')}
          sx={{
            marginTop: 3,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Proceed
        </Button>
      </Box>
    </>
  );
};

export default ProceedModal;
