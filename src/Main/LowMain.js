import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/MidLeft.png';
import picTwo from '../assets/img/MidUpper.png';
import picThree from '../assets/img/MidLower.png';

function LowMain() {

  const ImgWork = styled.div`
  display: flex;
  flex-direction:
  margin-right: 10px;
  margin-bottom: 8px;
  `;


  return(
    <div>
      <h1>Trending Footwear</h1>
      <img src = { pic } />
      <img src = {picTwo }/>
      <img src = {picThree}/>
    </div>
  )
}


export default LowMain;
