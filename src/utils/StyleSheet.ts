import { SxProps } from '@mui/material';

interface Styling {
  [k: string]: SxProps;
}

const StyleSheet = <T extends Styling>(styles: T) => {
  return styles;
};

export default StyleSheet;
