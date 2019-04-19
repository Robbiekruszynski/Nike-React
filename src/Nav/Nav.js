import React from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';
import MidNav from './MidNav';
import BottomNav from './BottomNav';


function Nav() {
  const Nav = styled.div`
  border:1px solid green;
  `;

  return(
    <div>
    <Nav><TopNav/></Nav>
    <Nav><MidNav/></Nav>
    <Nav><BottomNav/></Nav>
    </div>
  )
}

export default Nav;
