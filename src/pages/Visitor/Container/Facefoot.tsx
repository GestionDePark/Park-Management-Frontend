import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box } from '@mui/material';
import AppLogo from '@/components/AppLogo';

const Facefoot = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <AppLogo />
            <Typography variant="body2" color="text.secondary">
              Nous sommes la société MadaPark, dédiée à fournir le meilleur
              service à nos clients.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              101 Analamanga, Antananarivo, Madagascar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact.parkmada@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +261 34 56 789 01
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="https://www.facebook.com/"
              sx={{
                '&:hover': {
                  color: '#4CAF50',
                },
              }}
              color="inherit"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{
                pl: 1,
                pr: 1,
                '&:hover': {
                  color: '#4CAF50',
                },
              }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.twitter.com/"
              sx={{
                '&:hover': {
                  color: '#4CAF50',
                },
              }}
              color="inherit"
            >
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#4CAF50',
                },
              }}
              href="https://park-management.vercel.app/"
            >
              Park Mada
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Facefoot;
