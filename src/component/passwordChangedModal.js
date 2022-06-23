import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const PasswordChangedModal = () => {
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
          Password Reset Successful
        </Typography>
        <Typography variant='body1' textAlign={'center'}>
          Your password has been successfully changed.
          <Typography variant='h3' sx={{ fontWeight: 700, fontSize: 20 }}>
            Account is secured
          </Typography>
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

export default PasswordChangedModal;
