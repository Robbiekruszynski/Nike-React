import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/LowLeft.png';
import picTwo from '../assets/img/LowMid.png';
import picThree from '../assets/img/LowRight.png';


function MidFooter() {
  const Mid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;

  const Img = styled.img`
  margin-right: 15px
  `;

  return(
    <div>
    <Mid>
    <Img src = { pic }/>
    <Img src = { picTwo }/>
    <Img src = { picThree }/>
    </Mid>
    </div>
  )
}

export default MidFooter;
