import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/MainBody.png';

function TopMain() {
  const Img = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;

  return(
    <div>
    <Img>
      <img src = {pic}/>
    </Img>
    </div>
  )
}


export default TopMain;
