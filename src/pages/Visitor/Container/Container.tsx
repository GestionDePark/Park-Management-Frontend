import { Box, Typography } from '@mui/material';
import bemaraha from '../photo/Tsingy-de-Bemaraha-5.jpg';

const Container = () => {
  return (
    <Box pt={10} pb={0}>
      {' '}
      {/* Ajoutez du padding de 2 unités (par exemple) */}
      <Typography color="green" variant="h5" textAlign="center">
        Madagascar's preserved natural treasures
      </Typography>
      <Typography
        pt={5}
        pr={30}
        pb={5}
        pl={30}
        color="black"
        variant="h6"
        textAlign="center"
      >
        Unique species on earth. Considered by all scientists as a "sanctuary of
        nature", Madagascar is home to exceptional flora and fauna. flora and
        fauna. No fewer than 19,000 plant species have been including 1,000
        types of orchid. A world record. And it's on the red island are the most
        diverse varieties of lemur lemurs, as well as two-thirds of all
        chameleon types. No wonder, then that national parks and reserves
        proliferate here. Each with its own special features. Follow the guide
        on a tour of the "Madagascar nature" version of Ali Baba's cave. follow
        the guide:
      </Typography>
      <Typography color="green" variant="h5" textAlign="center">
        #1 Tsingy de Bemaraha National Park
      </Typography>
      <Typography
        pt={5}
        pr={30}
        pb={5}
        pl={30}
        color="black"
        variant="h6"
        textAlign="center"
      >
        Access to the park may be a sporting challenge, but the breathtaking
        scenery is well worth the effort. is well worth the effort: the Tsingy
        de Bemaraha, a veritable limestone cathedral, are the largest on the Red
        Island.
      </Typography>
      <Box mb={5} className="flex justify-center">
        <img
          src={bemaraha}
          alt="Image"
          style={{
            width: '60%',
            height: '40%',
            justifyContent: 'center',
          }}
        />
      </Box>
    </Box>
  );
};

export default Container;
