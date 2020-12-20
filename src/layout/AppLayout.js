import React, { useEffect, useState } from 'react';
import DrawerList from './../components/Drawer/DrawerList';
import BottomNavigation from '../components/Drawer/BottomNavigation';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import backgroundImage from '../assets/images/map.png';
import AppBar from './../components/Search/AppBar';
import MobileAppBar from './../components/Search/MobileAppBar';
import { useMediaQuery } from '@material-ui/core';
import BottomLeft from '../components/BottomIcons/BottomLeft.jsx';
import LocationData from './../components/BottomIcons/LocationData';
import { withRouter } from 'react-router-dom';
import DashBoardPageContent from './../components/dashBoradPageContent/DashBoardPageContent';

const Content = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 50px);
  // background-color: #444;
  border-radius: 15px;
  padding: 1rem;
`;

const AppLayout = ({ children, location }) => {
  // ? state
  const [isDashboard, setIsDashBoard] = useState(false);
  // ? useEffect
  useEffect(() => {
    // ? check the router is /dashboard page or not
    const checkPathName = () => {
      if (location.pathname === '/dashboard') {
        return setIsDashBoard(true);
      } else return setIsDashBoard(false);
    };
    // ? CALL FUNCTION
    checkPathName();
  }, [location.pathname, isDashboard]);

  // ? Check the window size
  const matches = useMediaQuery('(max-width:960px)');
  const setPadding = () => {
    if (!matches) {
      return '20px 0 20px 20px';
    } else return '10px 10px 10px 10px';
  };

  return (
    <>
      <Grid container xs={12} md={12} lg={12}>
        {!matches && (
          <Grid item md={1} lg={1}>
            <DrawerList />
          </Grid>
        )}
        {isDashboard && (
          <Grid item md={7} lg={7} style={{ padding: setPadding() }}>
            <DashBoardPageContent />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={isDashboard ? 4 : 11}
          lg={isDashboard ? 4 : 11}
          style={{ padding: setPadding() }}
        >
          <Content>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={12} md={4}>
              {matches ? <MobileAppBar /> : !isDashboard && <AppBar />}
            </Grid>
            {!matches && !isDashboard && (
              <>
                <BottomLeft />
                <LocationData />
              </>
            )}
          </Content>
        </Grid>
        {matches && (
          <Grid item xs={12} style={{ marginTop: '0.5rem' }}>
            <BottomNavigation />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default withRouter(AppLayout);
