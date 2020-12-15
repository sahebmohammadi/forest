import React from 'react';
// import Header from "./Header"
// import Footer from "./Footer"
import DrawerList from './../components/Drawer/DrawerList';

const AppLayout = ({ children }) => {
  return (
    <>
      <DrawerList />
      {children}
    </>
  );
};

export default AppLayout;
