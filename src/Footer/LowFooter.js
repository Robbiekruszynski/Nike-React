import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/Footer.png';

function LowFooter() {
  const Footer = styled.div`
  width: 100vw;
  border:1px solid red;
  `;

  return(
    <Footer>
      <img src = { pic }/>
    </Footer>
  )
}


export default LowFooter;
