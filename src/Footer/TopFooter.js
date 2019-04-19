import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/UpperLowMid.png';


function TopFooter() {

  const Img = styled.div`
  display: flex;
  justify-content: center;
  `;

  const Text = styled.h1`
  margin-left: 10%;
  `;

  return(
    <div>
    <Text>Summer Essential</Text>
    <Img>
      <img src = { pic }/>
    </Img>
  </div>
  )
}



export default TopFooter;
