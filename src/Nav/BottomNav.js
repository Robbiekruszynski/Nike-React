import React from 'react';
import styled from 'styled-components';

function BottomNav() {

  const Box = styled.div`
  display:flex;
  flex-direction: row;
  background-color: lightgrey;
  height:40px;
  width: 100vw;
  `;

  const Text = styled.h4`
  text-align: center;
  width: 100vw;
  `;


  return(
    <div>
    <Box>
      <Text>Extra 20% OFF ALL SALE</Text>
    </Box>
    </div>
  )
}

export default BottomNav
