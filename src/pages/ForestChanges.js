import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ForestChangesPage = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const LayerData = styled.div`
    position: fixed;
    width: 255px;
    border-radius: 15px;
    background-color: #efefef;
    height: 500px;
  `;

  return (
    <>
      {/* <AppLayout> */}
        <Wrapper>
          <LayerData>saheb</LayerData>
          {/* <Laye rData>mim</LayerData> */}
        </Wrapper>
      {/* </AppLayout> */}
    </>
  );
};

export default ForestChangesPage;
