import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/UpperLowMid.png';


function TopFooter() {

const Top = styled.h1`
  `;

  const Img = styled.div`
  display: flex;
  justify-content: center;
  `;

  return(
    <div>
    <Top>Summer Essential</Top>
    <Img>
      <img src = { pic }/>
    </Img>
  </div>
  )
}



export default TopFooter;
