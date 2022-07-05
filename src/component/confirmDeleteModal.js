import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { turnModalOff } from '../redux/actionsCreators/modalTurnOnActions';

const ConfirmDeleteModal = ({deleteUser}) => {
    const dispatch = useDispatch();
  //const navigate = useNavigate();
  const handleClick = () => {
    deleteUser(true)

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
          Delete Account
        </Typography>
        <Typography variant='body1' textAlign={'center'}>
          Once deleted cannot be undone!!!
          <Typography variant='h3' sx={{ fontWeight: 700, fontSize: 20 }}>
              Are you sure?
          </Typography>
        </Typography>
        <Button
          variant='outlined'
          onClick={() => 
            dispatch(turnModalOff(false))
          }
          sx={{
            marginTop: 3,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          No Cancel
        </Button>
        <Button
          variant='contained'
          onClick={handleClick}
          sx={{
            marginTop: 3,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Yes Delete
        </Button>
      </Box>
    </>
  );
};

export default ConfirmDeleteModal;
