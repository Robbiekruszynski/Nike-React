import React from 'react';
import styled from 'styled-components';

function BottomNav() {
  const Nav = styled.div`
  color:ready
  `;

  const Box = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  border:1px solid grey;
  height:10px;
  width: 100vw;
  `;


  return(
    <div>
      <Nav>
      <Box>a</Box>
      Bottom Nav
      </Nav>
    </div>
  )
}

export default BottomNav
