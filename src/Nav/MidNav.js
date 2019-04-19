import React from 'react';
import styled from 'styled-components';

function MidNav() {
  const Nav = styled.div`
  color:ready
  `;

  const Box = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  border:1px solid grey;
  height:10px;
  width:15px:
  `;

  return(
    <div>
      <Nav>
        <Box>a</Box>
        <Box>a</Box>
        <Box>a</Box>
        <Box>a</Box>
        <Box>a</Box>
      Mid Nav
      </Nav>
    </div>
  )
}


export default MidNav
