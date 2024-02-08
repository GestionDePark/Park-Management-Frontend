import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppLogo from '@/components/AppLogo';

const Navli = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };
  return (
    <header className="flex w-full items-center justify-between p-1">
      <Box display="flex" gap=".5rem" alignItems="center">
        <AppLogo />
      </Box>
      <Box display="flex" gap=".8rem" px="1rem">
        <Button
          onClick={toLogin}
          sx={{
            backgroundColor: '#4CAF50',
            color: '#f5f5f5',
            '&:hover': {
              backgroundColor: '#4CAF50',
            },
          }}
        >
          Log in
        </Button>
      </Box>
    </header>
  );
};

export default Navli;
