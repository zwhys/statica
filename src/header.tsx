import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Typography } from '@mui/material';
import Link from '@mui/material/Link';

export function ExerTractHeader() {
  return (
    <AppBar position='static' >
      <Toolbar sx={{margin: 1}}>
        <Box display='flex' alignItems='centre'>
          <Link href='https://github.com/zwhys' underline='none'>
            <Avatar
              alt='Logo'
              src='favicon.ico'
              sx={{ marginRight: 2, cursor: 'pointer', width: 56, height: 56 }}
            />
          </Link>
          <Link
            underline='none'
            variant='h4'
            sx={{ color: 'inherit', cursor: 'pointer' }}
          >
            <Typography color={'white'} fontSize={32}>
              {' '}
              ExerTract{' '}
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ExerTractHeader;
