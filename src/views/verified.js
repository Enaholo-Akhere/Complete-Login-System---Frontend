import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verifyAccount } from '../api/apirequests';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PropagateLoader from 'react-spinners/PropagateLoader';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Link from '@mui/material/Link';
import axios from 'axios';

import GppBadRoundedIcon from '@mui/icons-material/GppBadRounded';
// const logo = require('../assets/profena.png');

const Verified = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const checkMultipleRendering = useRef(false);
  //   const params = useParams();
  console.log('id, uniqueString', searchParams.get('id'));
  console.log('id, uniqueString', searchParams.get('uniqueString'));
  //   console.log('params', params);

  useEffect(() => {
    if (checkMultipleRendering.current) return;
    checkMultipleRendering.current = true;
    setLoading(true);
    const data = verifyAccount(
      searchParams.get('id'),
      searchParams.get('uniqueString')
    );
    data
      .then(({ data }) => {
        setMessage(data);
        console.log('success', data);
        setLoading(false);
        setSearchParams({});
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.pexels.com/photos/268966/pexels-photo-268966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        background: 'cover no-repeat',
        height: '100%',
        width: '100vw',
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0, 0.1)',
          width: '100vw',
          height: '100vh',
          alignContent: 'center',
        }}
      >
        <Box
          sx={{
            top: '50%',
            left: '50%',
            zIndex: 10,
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            bgcolor: 'rgba(134, 67, 31, 0.9)',
            borderRadius: 2,
            width: { xs: '80%', sm: '70%', md: '50%' },
            margin: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              minHeight: 250,
              gap: 3,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Link href='/signin'>
                <KeyboardBackspaceRoundedIcon
                  sx={{
                    color: 'white',
                    fontSize: 40,
                    bgcolor: 'red',
                    borderRadius: 100,
                    p: 0.5,
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography
                  variant='p'
                  sx={{
                    color: 'white',
                    textAlign: 'center',
                    width: 'fit-content',
                    fontSize: { xs: 30, sm: 40, md: 48 },
                    fontWeight: 'light',
                  }}
                >
                  Email Verification
                </Typography>
              </Box>
              {!loading ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                    gap: 2,
                  }}
                >
                  <Typography variant='h3' sx={{ color: 'white' }}>
                    {message.success ? (
                      <CheckCircleRoundedIcon
                        sx={{ fontSize: 80, color: 'rgb(0, 183, 0)' }}
                      />
                    ) : (
                      <GppBadRoundedIcon
                        sx={{ fontSize: 80, color: 'rgb(221, 0, 0)' }}
                      />
                    )}
                  </Typography>
                  <p
                    style={{ color: 'white', fontWeight: '50' }}
                    dangerouslySetInnerHTML={{
                      __html: message.message,
                    }}
                  ></p>
                </Box>
              ) : (
                <Box>
                  <PropagateLoader loading={loading} size={20} color='white' />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Verified;
