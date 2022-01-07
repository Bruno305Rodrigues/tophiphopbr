// @ts-ignore
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Menu from '../src/components/Menu'
import Lista from './components/Lista/Lista';
export default function App() {
  return (
    <>
      <Menu />
      <Container maxWidth="md" style={{ marginTop: '30px' }}>

        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Lista />
        </Box>
      </Container>
    </>
  );
}