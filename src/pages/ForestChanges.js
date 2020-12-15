import React from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import styled from 'styled-components';
const ForestChangesPage = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const LayerData = styled.div`
    width: 255px;
    border-radius: 15px;
    background-color: #fff;
    height: 708px;
  `;

  return (
    <>
      <AppLayout>
        <Wrapper>
          <LayerData>saheb</LayerData>
          <LayerData>mim</LayerData>
        </Wrapper>
      </AppLayout>
    </>
  );
};

export default ForestChangesPage;
