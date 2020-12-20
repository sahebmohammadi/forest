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
import ProductInfo from './ProductInfo';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Analysis from './analysis/Analysis';

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
    MuiTab: {
      wrapper: {
        flexDirection: 'row',
        fontSize: 15,
        padding: 0,
      },
      root: {
        minWidth:'50% !important',
      }
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
    width: '50%',
    backgroundColor: 'white',
    marginLeft: '1.5%',
    borderRadius: '8px',
    color: '#747070',
  },

  appbar: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '96%',
  },
  tabj: {
    borderBottom: '2px solid #eee',
    padding: 0,
    flexGrow: 1,
  },
}));

const Tabb = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" className={classes.appbar}>
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
              label="راهنمای لایه"
              icon={<LayersIcon />}
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tabj}
              label="آنالیز"
              icon={<BarChartIcon />}
              {...a11yProps(1)}
            />
          </Tabs>
        </MuiThemeProvider>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProductInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Analysis/>
       </TabPanel>
    </div>
  );
};

export default Tabb;
