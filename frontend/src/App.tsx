import React from 'react';
import './App.css';

import { useLazyQuery } from "@apollo/client";
import { GET_IP_INFO } from "./graphql";
import IpInfo from './components/Ipinfo';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

  const [address, setAddress] = React.useState<string>('');

  const [getData, {called, loading , data }] = useLazyQuery(GET_IP_INFO);

  const theme = createTheme();

  return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Domain/IP Look Up
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                onChange={e => setAddress(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="ip"
                label="Domain or IP"
                name="IP"
                autoFocus
              />
              <Button
                onClick = {() => getData({variables: {address: address}})}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
        <Container sx={ { display: "flex", justifyContent: "center", alignItems: "center"} }>
          <IpInfo data={data} />
        </Container>
    </ThemeProvider>
  );
}

export default App;
