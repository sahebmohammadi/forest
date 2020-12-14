import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#00A594',
    },
    secondary: {
      main: '#747070',
    },
    error: {
      main: '#FD5944',
    },
  },
  typography: {
    fontFamily: ['IRANSans', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ',',
    ),
  },
});

export default theme;
