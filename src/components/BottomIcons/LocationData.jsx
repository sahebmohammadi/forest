import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 383px;
  height: 35px;
  background-color: #e0fde7;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 30px;
  bottom: 86px;
  font-size: 11px;
`;
const Span = styled.span`
font-family: 'IRANSans'
font-size: 11px;
color : #615F5F `;
const LocationData = () => {
  return (
    <Wrapper>
      <Span>طول جغرافیایی: 52.56</Span>
      <Span>طول جغرافیایی: 52.56</Span>
      <Span>طول جغرافیایی: 52.56</Span>
    </Wrapper>
  );
};

export default LocationData;
