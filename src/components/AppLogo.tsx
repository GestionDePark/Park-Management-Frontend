import { MdPark } from 'react-icons/md';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import pageRoutes from '@/pageRoutes.ts';

const CustomContainer = styled(Link)(({ theme }) => ({
  display: 'flex',
  padding: '0 .4rem',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  alignItems: 'center',
  color: theme.palette.primary.main,
}));

const AppLogo = () => {
  return (
    <CustomContainer to={pageRoutes.home}>
      <MdPark fontSize="2rem" />
      <span>MadaPark</span>
    </CustomContainer>
  );
};

export default AppLogo;
