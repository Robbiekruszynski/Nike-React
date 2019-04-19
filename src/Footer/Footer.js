import React from 'react';
import styled from 'styled-components';
import TopFooter from './TopFooter';
import MidFooter from './MidFooter';
import LowFooter from './LowFooter';


function Footer() {
  const Nav = styled.div`
  color:ready
  `;

  return(
  <div>
  <div><TopFooter/></div>
  <div><MidFooter/></div>
  <div><LowFooter/></div>
  </div>
  )
}

export default Footer;
