import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/TopLeft.png';
import picTwo from '../assets/img/TopRight.png';


function MidMain(props) {

  const ImgWork = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 8px;
  `;

  const Text = styled.h1`
  margin-top: 0px;

  `;

  const Img = styled.img`
  margin-top: 0px;
  width: 50vw;
  `;


  return(
    <div>
    <Text onClick={props.onTextVisible}>Featured Women's Styles</Text>

    <Img src = {pic}/>
    <Img src = {picTwo}/>

    </div>
  )
}


export default MidMain;
