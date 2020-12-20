import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainLayer from '../components/productList/MainLayer';
import Tabb from '../components/info/Tabs';

const ForestChangesPage = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  width:60%;
  align-items: flex-start;
  `;

  const LayerData = styled.div`
    position: fixed;
    width: 355px;
    border-radius: 15px;
    background-color: #efefef;
    height: 500px;
  `;

  return (
    <>
      {/* <AppLayout> */}
        <Wrapper>
          <Flex>
            <MainLayer/>
            <Tabb/>
            </Flex>
        </Wrapper>
      {/* </AppLayout> */}
    </>
  );
};

export default ForestChangesPage;
