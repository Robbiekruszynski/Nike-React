import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/MainBody.png';

function TopMain() {
  const Img = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  `;

  return(
    <div>
      <Img src = {pic}/>

    </div>
  )
}


export default TopMain;
