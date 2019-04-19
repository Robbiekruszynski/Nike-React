import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/TopLeft.png';
import picTwo from '../assets/img/TopRight.png';


function MidMain() {

  const ImgWork = styled.div`
  display: flex;
  flex-direction:
  margin-right: 10px;
  margin-bottom: 8px;
  `;

  return(
    <div>
    <h1>Featured Women's Styles</h1>
    <ImgWork>
    <img src = {pic}/>
    <img src = {picTwo}/>
    </ImgWork>
    </div>
  )
}


export default MidMain;
