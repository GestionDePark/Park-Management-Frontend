import { createTheme, Theme, ThemeOptions } from '@mui/material';

const THEME_LIGHT: ThemeOptions = {
  palette: {
    primary: {
      main: '#18ce0c',
      contrastText: '#fff',
    },
  },
};

const THEME_DARK: ThemeOptions = {
  palette: {
    primary: {
      main: '#37f12c',
    },
  },
};

const muiTheme = (theme: 'dark' | 'light'): Theme => {
  return createTheme(theme === 'dark' ? THEME_DARK : THEME_LIGHT);
};

export default muiTheme;
