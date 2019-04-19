import React from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';
import MidNav from './MidNav';
import BottomNav from './BottomNav';


function Nav() {
  const Nav = styled.div`
  color:red;
  `;

  return(
    <div>
    <div><TopNav/></div>
    <div><MidNav/></div>
    <div><BottomNav/></div>
    </div>
  )
}

export default Nav;
