import React from 'react';
import styled from 'styled-components';

function TopNav() {
  const Box = styled.div`
  display:flex;
  border:1px solid green;
  height:30px;
  width:100vw;
  `;

  const LeftSide = styled.button`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 70px;
  border:1px solid red;
  `;

  const RightSide = styled.button`
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
  border: 1px solid blue;
  `;

  const End = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;

  `;
  return(
    <div>
      <Box>
      <LeftSide>Nikeplus</LeftSide>
      <LeftSide>Jordan</LeftSide>
      <LeftSide>Hurley</LeftSide>
      <LeftSide>Converse</LeftSide>

      <End>
        <RightSide>Join/Login To NikePlusAccount</RightSide>
        <RightSide>Help </RightSide>
        <RightSide>Cart</RightSide>
        <RightSide>Flag</RightSide>
      </End>

      </Box>
    </div>
  )
}

export default TopNav
