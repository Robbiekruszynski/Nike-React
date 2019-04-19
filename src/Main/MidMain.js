import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/TopLeft.png';
import picTwo from '../assets/img/TopRight.png';


function MidMain() {

  const ImgWork = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 8px;
  `;

  const Text = styled.h1`
  margin-left: 10%;
  `;

  return(
    <div>
    <Text>Featured Women's Styles</Text>
    <ImgWork>
    <img src = {pic}/>
    <img src = {picTwo}/>
    </ImgWork>
    </div>
  )
}


export default MidMain;
