import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LayersIcon from '@material-ui/icons/Layers';
import BarChartIcon from '@material-ui/icons/BarChart';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import select from '../../../assets/images/select.svg';
import drawing from '../../../assets/images/drawing.svg';
import Drawing from './Drawing/Drawing';
import Selecting from './Selecting/Selecting';

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
    PrivateTabIndicator: {
      root: {
        height: 0,
      },
    },

    MuiTab: {
      wrapper: {
        fontSize: 11,
        padding: 0,
      },
      root: {
        padding: '0 0',
        minWidth: '50% !important',
      },
    },
    MuiTabs: {
      wrapper: {
        flexDirection: 'row',
        fontSize: 13,
        padding: 0,
      },
      root: {
        padding: '0 0',
        minWidth: 20,
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
    color: '#747070',
  },

  appbar: {
    borderRadius: '8px',
    boxShadow: 'none',
  },
  text: {
    fontSize: '11px',
    margin:"15px auto",
    color:"#747070"
  },
  tabs: {
    borderRadius: '5px',
  },
  tabj: {
    background: '#fff',
    border: 0,
    color: '#9D9B9B !important',
    '&:focus': {
      background: '#fafafa',
      color: '#747070 !important',
    },
    '&:active': {
      background: '#fafafa',
      color: '#747070',
    },
    padding: 0,
    flexGrow: 1,
  },
}));

const Analysis = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" className={classes.appbar}>
        <p className={classes.text}>
        تغییرات را در جنگلها مشخص و پایش کنید
        </p>
        <MuiThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            className={classes.tabs}
          >
            <Tab
              p={0}
              className={classes.tabj}
              label="ترسیم روی نقشه"
              icon={<img src={drawing}></img>}
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tabj}
              label="انتخاب از روی نقشه"
              icon={<img src={select}></img>}
              {...a11yProps(1)}
            />
          </Tabs>
        </MuiThemeProvider>

      </AppBar>

      <TabPanel value={value} index={0}>
        <Drawing/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Selecting/>
      </TabPanel>
    </div>
  );
};

export default Analysis;
