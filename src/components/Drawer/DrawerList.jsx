import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { drawerListItems } from './DrawerListItems';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100px;
  height: 500px;
  flex-direction: column;
  align-items: center;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 74px;
  a {
    color: #747070;
  }
`;
// Drawer List
const DrawerList = ({ location }) => {
  // const [listItems, setListItems] = useState(drawerListItems);
  // const handleClick = (item) => {
  //   let items = [...listItems];
  //   const index = items.indexOf(item);
  //   items[index] = { ...items[index] };
  //   items[index].isExpand = !items[index].isExpand;
  //   setListItems(items);
  // };
  const IconText = styled.span`
    font-size: 0.8rem;
    color: ${(props) => (props.path === location.pathname ? '#00a594' : '#747070')};
  `;

  return (
    <Wrapper>
      {drawerListItems.map((item) => {
        const { text, icon, id, path } = item;
        return (
          <React.Fragment key={id}>
            <NavLink
              exact
              to={path}
              activeStyle={{ background: '#F2FBFA', color: '#00a594' }}
              color="#747070 !important"
              // isActive={() => {return null}
            >
              <ListItem key={id} path={path}>
                {location.pathname === path ? icon[1] : icon[0]}
                <IconText path={path}>{text}</IconText>
              </ListItem>
            </NavLink>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

export default withRouter(DrawerList);
