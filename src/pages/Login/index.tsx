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
import { IconButton, InputAdornment, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import image from '../../assets/login/bg1.jpg'
import { theme } from './theme.ts';
import { ForgotPasswordDialog } from './ForgotPasswordDialog.tsx';
import { LoginData } from '@/services/auth/types.ts';
import Auth from '@/services/auth';
import pageRoutes from '@/pageRoutes.ts';
import useErrorPopup from '@/hooks/useErrorPopup.tsx';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
  const [forgotPasswordHint, setForgotPasswordHint] = useState(false);
  const [nodeError, setErrorNode] = useErrorPopup();
  const nav = useNavigate();
  const { handleSubmit, register } = useForm<LoginData>();

  const handleLogin = async (data: LoginData) => {
    try {
      await Auth.login(data);
      nav(pageRoutes.home);
    } catch (e) {
      setErrorNode(e as Error);
      toggleLoading();
    }
  };

  const toggleLoading = () => {
    setIsLoading(prevState => !prevState)
  }
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };
  const _handleSubmit = (data: LoginData) => {
    toggleLoading();
    handleLogin({
      email: data.email,
      password: data.password,
    });
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
            <Box component="form" onSubmit={handleSubmit(_handleSubmit)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                {...register('email')}
              />
              <TextField
                margin="normal"
                required
                fullWidth
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
                {...register('password')}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                // TODO: add remember value
                //{...register('remember')}
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
        {nodeError}
      </Container>
    </ThemeProvider>
  );
}