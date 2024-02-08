import { Box, Typography } from '@mui/material';
import bemaraha from '../photo/Tsingy-de-Bemaraha-5.jpg';

const Container = () => {
  return (
    <Box pt={10} pb={0}>
      {' '}
      {/* Ajoutez du padding de 2 unités (par exemple) */}
      <Typography color="green" variant="h5" textAlign="center">
        Les trésors naturels préservés de Madagascar
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
        Des espèces uniques sur terre. Considéré par tous les scientifiques
        comme un « sanctuaire de la nature », Madagascar recèle une faune et une
        flore exceptionnelles. Pas moins de 19000 espèces végétales ont été
        répertoriées dont 1000 sortes d’orchidées. Un record mondial. Et c’est
        sur l’île rouge que l’on dénombre les variétés les plus diverses de
        lémuriens, ainsi que les deux tiers des types de caméléon. Pas étonnant
        que les parcs nationaux et les réserves y prolifèrent. Chacun propose sa
        particularité. Visite de la caverne d’Ali Baba version « nature de
        Madagascar », suivez le guide :
      </Typography>
      <Typography color="green" variant="h5" textAlign="center">
        #1 Parc National Tsingy de Bemaraha
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
        Si l’accès au parc s’avère un challenge sportif, le spectacle, à couper
        le souffle, en vaut largement l’effort : Les Tsingy de Bemaraha,
        véritables cathédrales de calcaire, sont les plus vastes de l’île Rouge.
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
