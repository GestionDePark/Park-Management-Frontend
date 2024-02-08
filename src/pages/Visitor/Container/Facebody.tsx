import { Box, Typography } from '@mui/material';
import head from '../photo/head.jpeg';

const FaceBody = () => {
  return (
    <Box className="flex mt-15 flex-col rounded-2xl relative">
      <Box
        className="gradient-circle-right"
        sx={{
          width: '100%',
          display: 'flex',
          height: '25rem',
          position: 'relative', // Positionné relativement pour permettre le positionnement absolu du texte
        }}
      >
        {/* Image */}
        <img src={head} alt="Image" style={{ width: '100%', height: '100%' }} />

        {/* Conteneur de texte */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Fond semi-transparent pour améliorer la lisibilité du texte
          }}
        >
          {/* Texte */}
          <Typography color="white" variant="h4" textAlign="center">
            Top national parks in Madagascar
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '50%', height: '100%' }}></Box>

      <Box
        bottom="0"
        height="0"
        width="100%"
        display="flex"
        position="absolute"
        alignItems="center"
        justifyContent="center"
      ></Box>
    </Box>
  );
};

export default FaceBody;
