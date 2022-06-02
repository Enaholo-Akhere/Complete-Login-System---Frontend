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
// import { registerUsers } from '../api/apirequests';
import { useFormik } from 'formik';
import { userSignUp } from '../redux/actionsCreators/userSignUpActions';
import { useDispatch, useSelector } from 'react-redux';
// import IconButton from '@mui/material/IconButton';
const logo = require('../assets/profena.png');

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  if (user.data.length) {
    console.log(user.data);
  }

  const [isTrue, setIsTrue] = useState(true);
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

  const onSubmit = (values) => {
    dispatch(userSignUp(values));
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
                  variant='outlined'
                  id='name'
                  label='Name'
                  name='name'
                  type='text'
                  value={formik.values.names}
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
                <Button
                  variant='contained'
                  backgroundColor='primary'
                  sx={{ width: 'fit-content' }}
                  type='submit'
                >
                  Signin
                </Button>
              </Grid>
              <Grid item xs={12} marginX={'auto'} marginY={2}>
                <Typography variant='p' color='black'>
                  {' '}
                  Have an account?{' '}
                  <Link href='/signin' sx={{ textDecoration: 'none' }}>
                    Sign in
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
