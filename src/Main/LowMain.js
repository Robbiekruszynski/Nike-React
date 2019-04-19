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

  const Left = styled.div`
  display: flex;
  display: column;
  justify-content: center;
  border:1px solid blue;
  `;

  const Text = styled.h1`
  margin-left: 10%;
  `;


  return(
    <div>
      <Text>Trending Footwear</Text>
      <Left>
      <img src = { pic } />
      <img src = { picTwo }/>
      </Left>
      <img src = { picThree }/>

    </div>
  )
}


export default LowMain;
