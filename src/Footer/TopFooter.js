import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/UpperLowMid.png';


function TopFooter() {

  const Img = styled.img`
  width:100vw;
  `;

  const Text = styled.h1`
  `;

  return(
    <div>
    <Text>Summer Essential</Text>
      <Img src = { pic }/>
  </div>
  )
}



export default TopFooter;
