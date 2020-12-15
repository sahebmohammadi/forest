import React from 'react';
// import Header from "./Header"
// import Footer from "./Footer"
import DrawerList from './../components/Drawer/DrawerList';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import backgroundImage from '../assets/images/map.png';
const Content = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  border-radius: 15px;
  padding: 1rem;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Grid container xs={12} md={12} lg={12}>
        <Grid item xs={2} md={1}>
          <DrawerList />
        </Grid>
        <Grid item xs={10} md={11} style={{ padding: '1.5rem 0 0 1.2rem' }}>
          <Content>{children}</Content>
        </Grid>
      </Grid>
      {/* <Content>{children}</Content> */}
    </>
  );
};

export default AppLayout;
