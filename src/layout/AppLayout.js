import React, { useEffect } from 'react';
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
const Content = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  width: 100%;
  // height: 100vh;
  height: calc(100vh - 50px);
  // background-color: #444;
  border-radius: 15px;
  padding: 1rem;
`;

const AppLayout = ({ children }) => {
  useEffect(() => {
    console.log('saheb mim');
  }, []);
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
        <Grid item xs={12} md={11} lg={11} style={{ padding: setPadding() }}>
          <Content>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={12} md={4}>
              {matches ? <MobileAppBar /> : <AppBar />}
            </Grid>
            {!matches && (
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

export default AppLayout;
