import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import * as yup from 'yup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
// import { registerUsers } from '../api/apirequests';
import { useFormik } from 'formik';
import { userSignUp } from '../redux/actionsCreators/userSignUpActions';
import { useDispatch } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';
import ProceedModal from '../component/ProceedModal';
import Modal from '../component/Modal';
// import IconButton from '@mui/material/IconButton';
const logo = require('../assets/profena.png');

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isTrue, setIsTrue] = useState(true);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, 'must be more than 3 alphabets')
      .max(50, 'cannot be more than 50')
      .required('please provide your names'),
    email: yup.string().email('please provide a valid email').required(),
    password: yup
      .string()
      .min(8, 'password minimum length required is 8')
      .max(20, 'password length cannot be more than 20')
      .required(),
    dateOfBirth: yup.date().required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
  };

  const onSubmit = (values, { setFieldError, setSubmitting }) => {
    dispatch(
      userSignUp(values, navigate, setFieldError, setSubmitting, setIsLoading)
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
          <ProceedModal />
        </Modal>

        <form onSubmit={formik.handleSubmit}>
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
            <Paper
              data-aos='flip-up'
              sx={{
                backgroundColor: 'rgba(256,256,256, 0.9)',
                paddingX: 5,
                paddingY: { xl: 5, lg: 5, md: 5, sm: 3, xs: 3 },
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
                  maxHeight: { xl: 100, lg: 100, md: 100, sm: 80, xs: 80 },
                  maxWidth: { xl: 100, lg: 100, md: 100, sm: 80, xs: 80 },
                  display: 'flex',
                  justifyContent: 'center',
                  margin: 'auto',
                  marginBottom: { xl: 10, lg: 10, md: 10, sm: 5, xs: 5 },
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
                  variant='outlined'
                  id='name'
                  label='Name'
                  name='name'
                  type='text'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  placeholder='John Doe'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonIcon />{' '}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
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
              <Grid item xs={12} sx={{ marginY: 2 }}>
                <TextField
                  fullWidth
                  id='dateOfBirth'
                  variant='outlined'
                  name='dateOfBirth'
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.dateOfBirth &&
                    Boolean(formik.errors.dateOfBirth)
                  }
                  helperText={
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  }
                  type='date'
                />
              </Grid>
              <Grid item xs={12} sx={{ marginY: 2 }}>
                <TextField
                  fullWidth
                  id='password'
                  variant='outlined'
                  label='Password'
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
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
                    Signup
                  </Button>
                )}
                {loading && (
                  <PropagateLoader color={'red'} loading={loading} size={20} />
                )}
              </Grid>
              <Grid
                item
                xs={12}
                marginX={'auto'}
                marginY={
                  !loading
                    ? { xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }
                    : { xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }
                }
              >
                <Typography variant='p' color='black'>
                  Have an account?{' '}
                  <Link href='/signin' sx={{ textDecoration: 'none' }}>
                    Signin
                  </Link>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
