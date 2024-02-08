import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa6';

const Navli = () => {
  return (
    <header className="flex w-full items-center justify-between p-1">
      <Box display="flex" gap=".5rem" alignItems="center">
        <p className="text-xl text-nowrap select-none font-bold" color="green">
          MadaPark
        </p>
      </Box>

      <Box display="flex" gap=".8rem" px="1rem">
        <UserLink to="/login" color="#aeafa8">
          <FaRegUser fontSize="1.2rem" />
        </UserLink>
      </Box>
    </header>
  );
};

const UserLink = styled(Link)(({ color, theme }) => ({
  padding: '.6rem',
  borderRadius: '50%',
  backgroundColor: color || theme.palette.primary.main,
}));

export default Navli;
