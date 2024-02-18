import { colors, createTheme, Theme, ThemeOptions } from '@mui/material';

const THEME_LIGHT: ThemeOptions = {
  palette: {
    primary: {
      main: colors.green['400'],
      contrastText: '#fff',
    },
    info: {
      main: '#000',
    },
  },
};

const THEME_DARK: ThemeOptions = {
  palette: {
    primary: {
      main: colors.green['600'],
      contrastText: '#000',
    },
    info: {
      main: '#fff',
    },
  },
};

const muiTheme = (theme: 'dark' | 'light'): Theme => {
  return createTheme(theme === 'dark' ? THEME_DARK : THEME_LIGHT);
};

export default muiTheme;
