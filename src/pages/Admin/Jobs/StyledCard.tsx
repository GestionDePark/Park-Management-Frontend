import { PropsWithChildren } from 'react';
import { Card, CardContent, colors } from '@mui/material';
import StyleSheet from '@/utils/StyleSheet';
import {
  CardTravelRounded,
  EmojiFoodBeverage,
  Forest,
  PanTool,
  Pets,
  SportsFootball,
} from '@mui/icons-material';

const randomColors = [
  colors.brown['500'],
  colors.green['500'],
  colors.yellow['500'],
  colors.lime['500'],
  colors.indigo['500'],
  colors.teal['500'],
  colors.amber['500'],
  colors.deepOrange['500'],
];

const styles = StyleSheet({
  card: {
    height: '15rem',
    width: '15rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1rem',
  },
  text: {
    fontSize: '1.4rem',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fontInherit: {
    fontSize: '5rem',
  },
});

const randomIcons = [
  <Forest sx={styles.fontInherit} />,
  <EmojiFoodBeverage sx={styles.fontInherit} />,
  <PanTool sx={styles.fontInherit} />,
  <Pets sx={styles.fontInherit} />,
  <SportsFootball sx={styles.fontInherit} />,
  <CardTravelRounded sx={styles.fontInherit} />,
];

const getRandomColor = () => {
  return randomColors[Math.floor(Math.random() * randomColors.length)];
};

const RandomIcon = () => {
  return randomIcons[Math.floor(Math.random() * randomIcons.length)];
};

const StyledCard = ({ children }: PropsWithChildren) => {
  return (
    <Card
      elevation={5}
      sx={Object.assign(styles.card, { background: getRandomColor() })}
    >
      <CardContent sx={styles.text}>{children}</CardContent>
      <div className="absolute bottom-[-0.6rem] left-[-0.6rem] rotate-[45deg]">
        <RandomIcon />
      </div>
    </Card>
  );
};

export default StyledCard;
