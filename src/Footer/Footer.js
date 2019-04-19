import React from 'react';
import styled from 'styled-components';
import TopFooter from './TopFooter';
import MidFooter from './MidFooter';
import LowFooter from './LowFooter';


function Footer() {
  const Nav = styled.div`
  border:1px red solid;
  `;

  return(
  <div>
  <Nav><TopFooter/></Nav>
  <Nav><MidFooter/></Nav>
  <Nav><LowFooter/></Nav>
  </div>
  )
}

export default Footer;
