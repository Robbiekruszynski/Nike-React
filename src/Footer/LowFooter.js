import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/Footer.png';

function LowFooter() {
  const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  border:1px solid red;
  `;

  const FootImg = styled.img`
  width: 100%;
  `;

  return(
    <Footer>
      <FootImg src = { pic }/>
    </Footer>
  )
}


export default LowFooter;
