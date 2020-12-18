import React from 'react';
// import Header from "./Header"
// import Footer from "./Footer"
import DrawerList from './../components/Drawer/DrawerList';
import BottomNavigation from '../components/Drawer/BottomNavigation';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import backgroundImage from '../assets/images/map.png';
import AppBar from './../components/Search/AppBar';
import MobileAppBar from './../components/Search/MobileAppBar';
import { useMediaQuery } from '@material-ui/core';

const Content = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 97vh;
  // background-color: #444;
  border-radius: 15px;
  padding: 1rem;
`;


const AppLayout = ({ children }) => {
  const matches = useMediaQuery('(max-width:960px)');
  return (
    <>
      <Grid container xs={12} md={12} lg={12}>
        {!matches && (
          <Grid item md={1} lg={1}>
            <DrawerList />
          </Grid>
        )}
        <Grid item xs={12} md={11} lg={11} style={{ padding: '1.5rem 0 0 1.2rem' }}>
          <Content>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={12} md={4}>
              {matches ? <MobileAppBar /> : <AppBar />}
            </Grid>
          </Content>
        </Grid>
        {matches && (
          <Grid item xs={12} style={{ marginTop: '3rem' }}>
            <BottomNavigation />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default AppLayout;
