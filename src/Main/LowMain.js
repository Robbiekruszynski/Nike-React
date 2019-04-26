import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/bred.png';


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
  width: 100vw;
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
      <Img src = { pic } />
    </div>
  )
}


export default LowMain;
