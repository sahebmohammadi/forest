import React, { useState } from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  overrides: {
    MuiSelect: {
      select: {
        borderRadius: '5px',
        background: '#fff',
        border: '1px solid #F2F2F2',
        '&:focus': {
          borderRadius: '5px',
          background: '#fff !important',
          border: '1px solid #F2F2F2 !important',
        },
      },
      selectMenu: {
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        textAlign: 'left',
        border: '1px solid #F2F2F2',
      },
      MuiOutlinedInput: {
        notchedOutline: {
          border: '0px solid #484850',
          borderRadius: '5px',
          boxShadow: 'none',
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    dispaly: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    fontSize: '11px',
    margin: '10px 0 -10px 0',
  },
  margin: {
    margin: '0px auto',
    width: '80%',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '94%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Selecting = () => {
  const classes = useStyles();

  const [text, setText] = useState('1');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <p className={classes.text}>محدوده مورد نظر را انتخاب کنید</p>

          <FormControl className={classes.formControl}>
            <Select
              value={text}
              onChange={handleChange}
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Without label' }}
              disableUnderline
            >
              <MenuItem value="1">متن نمایشی ۱</MenuItem>
              <MenuItem value="2">متن ۲</MenuItem>
              <MenuItem value="3">متن ۳</MenuItem>
            </Select>
          </FormControl>
        </div>
      </MuiThemeProvider>
    </>
  );
};

export default Selecting;
