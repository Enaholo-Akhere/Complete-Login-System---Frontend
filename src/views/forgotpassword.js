import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgotPasswordAction } from '../redux/actionsCreators/forgotPasswordActionCreator';
import PropagateLoader from 'react-spinners/PropagateLoader';
import Modal from '../component/Modal';
import EmailSent from '../component/emailSentModal';
// import IconButton from '@mui/material/IconButton';
const logo = require('../assets/profena.png');

const ForgotPassword = () => {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const validationSchema = yup.object({
    email: yup.string().email('please provide a valid email').required(),
  });
  const initialValues = {
    email: '',
    redirectUrl: 'resetpassword',
  };

  const onSubmit = (values, { setFieldError, setSubmitting }) => {
    dispatch(
      forgotPasswordAction(
        values,
        navigate,
        setFieldError,
        setSubmitting,
        setIsLoading
      )
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
        <Modal>
          <EmailSent />
        </Modal>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            direction='column'
            justifyContent={'center'}
            alignContent={'center'}
            spacing={0}
            sx={{ minHeight: '100vh' }}
          >
            <Paper
              data-aos='flip-down'
              sx={{
                backgroundColor: 'rgba(256,256,256, 0.9)',
                padding: 5,
                color: 'white',
                fontFamily: 'Roboto, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: 600,
                margin: 'auto',
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
              <Grid item xs={12} sx={{ marginY: 2 }}>
                <TextField
                  fullWidth
                  id='email'
                  variant='outlined'
                  label='Email'
                  name='email'
                  type='email'
                  placeholder='example@gmail.com'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} margin={'auto'} marginY={2}>
                {!loading ? (
                  <Button
                    variant='contained'
                    backgroundColor='primary'
                    sx={{ width: 'fit-content' }}
                    type='submit'
                    fullWidth
                  >
                    Submit
                  </Button>
                ) : (
                  <PropagateLoader color={'red'} loading={loading} size={20} />
                )}
              </Grid>
            </Paper>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
