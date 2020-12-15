import React from 'react';
// import Header from "./Header"
// import Footer from "./Footer"
import DrawerList from './../components/Drawer/DrawerList';
import SearchInput from '../components/Search/SearchInput';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import backgroundImage from '../assets/images/map.png';
import AppBar from './../components/Search/AppBar';

const Content = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200vh;
  // background-color: #444;
  border-radius: 15px;
  padding: 1rem;
`;
const ProfileWrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  height: 400px;
  background-color: #ccc;
`;
const Account = styled.div`
  // width: 30%;
  height: 100%;
`;
const AppLayout = ({ children }) => {
  return (
    <>
      <Grid container xs={12} md={12} lg={12}>
        <Grid item xs={2} md={1}>
          <DrawerList />
        </Grid>
        <Grid item xs={10} md={11} style={{ padding: '1.5rem 0 0 1.2rem' }}>
          <Content>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={12} md={4}>
              <AppBar />
            </Grid>
          </Content>
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
