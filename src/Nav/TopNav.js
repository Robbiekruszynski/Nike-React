import React from 'react';
import styled from 'styled-components';

function TopNav() {
  const Box = styled.div`
  display:flex;
  flex-direction: row;
  border:1px solid grey;
  height:30px;
  width:100vw;
  `;

  const LeftSide = styled.button`
  /* display:flex;
  flex-direction: row; */
  justify-content: flex-start;
  width: 70px;
  border:1px solid red;
  `;

  const RightSide = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
  border: 1px solid black;
  margin-right: 10px;
  `;

  return(
    <div>
      <Box>
      <LeftSide>Nikeplus</LeftSide>
      <LeftSide>Jordan</LeftSide>
      <LeftSide>Hurley</LeftSide>
      <LeftSide>Converse</LeftSide>
      <RightSide>
      <p>Join/Login To NikePlusAccount</p>
      <p>Help</p>
      <p>Cart</p>
      <p>Flag</p>
      </RightSide>
      </Box>
    </div>
  )
}

export default TopNav
