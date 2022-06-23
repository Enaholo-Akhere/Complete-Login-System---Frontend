import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const logo = require('../assets/profena.png');

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        background: 'cover no-repeat',
        height: '100vh',
        width: '100vw',
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
        <Grid
          container
          direction='column'
          justifyContent={'center'}
          alignContent={'center'}
          spacing={0}
          sx={{ minHeight: '100vh' }}
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
                  fontWeight: 600,
                }}
              >
                Welcome to Ena's Tech Savvy
              </Typography>
              <Typography
                variant='h5'
                color='white'
                sx={{ textAlign: 'center', fontWeight: 400, marginY: 2 }}
              >
                Feel free to navigate round this website
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  margin: 'auto',
                }}
              >
                <Button
                  component='a'
                  href='/signup'
                  variant='outlined'
                  backgroundColor='primary'
                  sx={{ width: 'fit-content', marginX: 2 }}
                >
                  Signup
                </Button>
                <Button
                  component='a'
                  href='/signin'
                  variant='contained'
                  backgroundColor='primary'
                  sx={{ width: 'fit-content', marginX: 2 }}
                >
                  Signin
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
