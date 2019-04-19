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

  return(
    <div>
    <Mid>
    <img src = { pic }/>
    <img src = { picTwo }/>
    <img src = { picThree }/>
    </Mid>
    </div>
  )
}

export default MidFooter;
