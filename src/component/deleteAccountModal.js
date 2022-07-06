import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { deleteAccountAction } from '../redux/actionsCreators/deleteAccountActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteAccount = () => {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = JSON.parse(window.localStorage.getItem('user'));

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const validationSchema = yup.object({
    email: yup.string().email('please provide a valid email').required(),
  });
  const initialValues = {
    email,
  };

  const handleToastify = (message) => {
    return toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = (values, { setFieldError, setSubmitting }) => {
    dispatch(
      deleteAccountAction(
        values,
        navigate,
        setFieldError,
        setSubmitting,
        setIsLoading,
        handleToastify
      )
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction='column'
          justifyContent={'center'}
          alignContent={'center'}
          spacing={0}
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
            {' '}
            <Typography
              variant='h3'
              textAlign={'center'}
              color='black'
              sx={{
                marginY: 1,
                fontSize: {
                  xl: '3.75rem',
                  lg: '3.75rem',
                  md: '2.5rem',
                  sm: '2.5rem',
                  xs: '2.5rem',
                },
              }}
            >
              Deleting Account
            </Typography>
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
                  Delete
                </Button>
              ) : (
                <PropagateLoader color={'red'} loading={loading} size={20} />
              )}
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Box>
  );
};

export default DeleteAccount;
