import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pageRoutes from '@/pageRoutes';
import Auth from '@/services/auth';
import { MdLogout } from 'react-icons/md';

const ButtonLogout = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    Auth.logout();
    nav(pageRoutes.home);
  };
  return (
    <Button
      variant="contained"
      onClick={handleLogout}
      sx={{ fontWeight: 'bold', display: 'flex', gap: '.5rem' }}
    >
      <MdLogout className="text-xl" />
      <span>Logout</span>
    </Button>
  );
};

export default ButtonLogout;
