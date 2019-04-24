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
  justify-content: center;
  border: 1px solid green;
  `;

  const Img = styled.img`
  margin-right: 15px;
  `;
  const Bottom = styled.div`
  display:flex
  justify-content: center;

  margin: auto;
  width: 100%;
  border: 1px solid blue;
  `;

  const Text = styled.h1`
  margin-left: 10%;
  border: 1px solid red;
  `;


  return(
    <div>
      <Text>Trending Footwear</Text>
      <Left>
      <Img src = { pic } />
      <Img src = { picTwo }/>
      </Left>
    </div>
  )
}


export default LowMain;
