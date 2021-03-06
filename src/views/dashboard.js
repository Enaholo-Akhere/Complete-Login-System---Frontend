import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { turnModalOn } from '../redux/actionsCreators/modalTurnOnActions';
import { useDispatch } from 'react-redux';
import Modal from '../component/Modal';
import ConfirmDeleteModal from '../component/confirmDeleteModal';
import DeleteAccount from '../component/deleteAccountModal';
const logo = require('../assets/profena.png');

const Dashboard = () => {
  const [deleteUser, setDeleteUser] = useState(false);
  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogOut = () => {
    window.localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        background: 'cover no-repeat',
        height: '100%',
        width: '100vw',
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0, 0.5)',
          width: '100vw',
          height: '100vh',
          alignContent: 'center',
        }}
      >
        <Modal>
          {!deleteUser ? (
            <ConfirmDeleteModal deleteUser={setDeleteUser} />
          ) : (
            <DeleteAccount />
          )}
        </Modal>
        <Grid
          container
          direction='column'
          justifyContent={'center'}
          alignContent={'center'}
          spacing={0}
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Grid item xs={3}>
            <Paper
              sx={{
                backgroundColor: 'rgba(0,0,0, 0.5)',
                padding: 5,
                color: 'white',
                fontFamily: 'Roboto, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box
                component={'a'}
                href={'/'}
                sx={{
                  maxHeight: 100,
                  maxWidth: 100,
                  display: 'flex',
                  justifyContent: 'center',
                  margin: 'auto',
                  marginBottom: 10,
                }}
              >
                <Box
                  component={LazyLoadImage}
                  src={logo}
                  sx={{
                    width: 1,
                    height: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 'auto',
                  }}
                />
              </Box>
              <Typography
                variant='h2'
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: 600,
                  textAlign: 'center',
                  fontSize: {
                    xl: '3.75rem',
                    lg: '3.75rem',
                    md: '2.5rem',
                    sm: '2.5rem',
                    xs: '2.5rem',
                  },
                }}
              >
                Welcome, {user.name}
              </Typography>
              <Typography
                variant='h5'
                color='white'
                sx={{ textAlign: 'center', fontWeight: 400, marginY: 2 }}
              >
                {user.email}
              </Typography>
              <Typography
                variant='h5'
                color='white'
                sx={{ textAlign: 'center', fontWeight: 400, marginY: 2 }}
              >
                {new Date(user.dateOfBirth).toLocaleDateString()}
              </Typography>
              <Button
                variant='contained'
                backgroundColor='primary'
                sx={{ width: 'fit-content', alignSelf: 'center', marginY: 2 }}
                onClick={handleLogOut}
              >
                Logout
              </Button>
              <Button
                variant='outlined'
                backgroundColor='primary'
                sx={{ width: 'fit-content', alignSelf: 'center', marginY: 5 }}
                onClick={() => dispatch(turnModalOn(true))}
              >
                Delete Account
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
