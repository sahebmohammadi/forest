import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { MobileDrawerListItems } from './DrawerListItems';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  position: fixed;
  background-color: #fff;
  position: fixed;
  bottom: 0;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16vw;
  height: 60px;
  a {
    color: #747070;
  }
`;
// Drawer List
const BottomNavigation = ({ location }) => {
  const IconText = styled.span`
    font-size: 0.6rem;
    color: ${(props) => (props.path === location.pathname ? '#00a594' : '#747070')};
  `;

  return (
    <Wrapper>
      {MobileDrawerListItems.map((item) => {
        const { text, icon, id, path } = item;
        return (
          <React.Fragment key={id}>
            <NavLink
              exact
              to={path}
              activeStyle={{ color: '#00a594' }}
              // activeStyle={{ background: '#F2FBFA', color: '#00a594' }}
              color="#747070 !important"
              // isActive={() => {return null}
            >
              <ListItem key={id} path={path}>
                {location.pathname === path ? icon[1] : icon[0]}
                {location.pathname === path ? (
                  <IconText path={path}>{text}</IconText>
                ) : null}
              </ListItem>
            </NavLink>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

export default withRouter(BottomNavigation);
