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
  `;

  const Bottom = styled.div`
  display:flex
  justify-content: flex-end;
  margin-right: 18.5vw;
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
      <Bottom>
      <img src = { picThree }/>
      </Bottom>

    </div>
  )
}


export default LowMain;
