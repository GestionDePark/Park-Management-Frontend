import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Typography, { TypographyOwnProps } from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconButton, InputAdornment, Snackbar, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { api } from '../../api';
import image from '../../assets/login/bg1.jpg'
import { theme } from './theme.ts';
import { ForgotPasswordDialog } from './ForgotPasswordDialog.tsx';

function Copyright(props: TypographyOwnProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Park Management
      {` ${new Date().getFullYear()}`}
      {'.'}
    </Typography>
  );
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [forgotPasswordHint, setForgotPasswordHint] = useState(false)

  const alert = (alertMessage: string) => {
    setAlertMessage(alertMessage);
    setShowAlert(true);
  }

  const hideAlert = () => {
    setShowAlert(false);
  }
  const toggleLoading = () => {
    setIsLoading(prevState => !prevState)
  }
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    toggleLoading();
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    api.login({
      email: data.get('email') as string,
      password: data.get('password') as string,
      remember: !!data.get('remember'),
    }).then((authenticated) => {
      alert('signed up successfully')
    }).catch(reason => {
      toggleLoading();
      alert(reason.toString())
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          padding: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            height: '70%',
            minHeight: '620px',
            boxShadow: '0 0 10px gray',
            backgroundColor: '#FFFFFFDD',
            backdropFilter: 'blur(5px)',
            borderRadius: '15px'
          }}
        >
          <Box
            maxWidth={'90%'}
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '10px'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <MdLockOutline />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome to Park Management Admin
            </Typography>
            <Typography component="h1" variant="h5">
            Please Sign In to continue
          </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position={'end'}>
                      <IconButton
                        aria-label={'toggle password visibility'}
                        edge={'end'}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                name={'remember'}
                label="Remember me"
              />
              <Button
                disabled={isLoading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" onClick={() => {
                    setForgotPasswordHint(prevState => !prevState);
                  }}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        <ForgotPasswordDialog open={forgotPasswordHint} closeHandler={() => {
            setForgotPasswordHint(prevState => !prevState)
          }}
        />
        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={hideAlert}
          message={alertMessage}
        />
      </Container>
    </ThemeProvider>
  );
}