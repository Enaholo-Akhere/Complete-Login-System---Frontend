import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import * as yup from 'yup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
// import { registerUsers } from '../api/apirequests';
import { useFormik } from 'formik';
import { resetPasswordAction } from '../redux/actionsCreators/resetPasswordAction';
import { useDispatch } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';
import PasswordChangedModal from '../component/passwordChangedModal';
import Modal from '../component/Modal';
import { useParams } from 'react-router-dom';
// import { modalTurnon }
// import IconButton from '@mui/material/IconButton';
const logo = require('../assets/profena.png');

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, resetString } = useParams();

  const [isTrue, setIsTrue] = useState(true);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const validationSchema = yup.object({
    newPassword: yup
      .string()
      .min(8, 'password minimum length required is 8')
      .max(20, 'password length cannot be more than 20')
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'passwords must match'),
  });

  const initialValues = {
    newPassword: '',
    resetString,
    userId,
  };

  const onSubmit = (values, { setFieldError, setSubmitting }) => {
    dispatch(
      resetPasswordAction(
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
          <PasswordChangedModal />
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
              data-aos='flip-up'
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
                  id='password'
                  variant='outlined'
                  label='New Password'
                  name='newPassword'
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.newPassword &&
                    Boolean(formik.errors.newPassword)
                  }
                  helperText={
                    formik.touched.newPassword && formik.errors.newPassword
                  }
                  type={isTrue ? 'password' : 'text'}
                  placeholder='********'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position='end'>
                        {isTrue ? (
                          <VisibilityOffIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => setIsTrue((prev) => !prev)}
                          />
                        ) : (
                          <VisibilityIcon
                            onClick={() => setIsTrue((prev) => !prev)}
                            sx={{ cursor: 'pointer' }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ marginY: 2 }}>
                <TextField
                  fullWidth
                  id='password'
                  variant='outlined'
                  label='Confirm Password'
                  name='confirmPassword'
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  type={isTrue ? 'password' : 'text'}
                  placeholder='********'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position='end'>
                        {isTrue ? (
                          <VisibilityOffIcon
                            sx={{ cursor: 'pointer' }}
                            onClick={() => setIsTrue((prev) => !prev)}
                          />
                        ) : (
                          <VisibilityIcon
                            onClick={() => setIsTrue((prev) => !prev)}
                            sx={{ cursor: 'pointer' }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={3} margin={'auto'}>
                {!loading && (
                  <Button
                    variant='contained'
                    backgroundColor='primary'
                    sx={{ width: 'fit-content' }}
                    type='submit'
                  >
                    Submit
                  </Button>
                )}
                {loading && (
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

export default ResetPassword;
