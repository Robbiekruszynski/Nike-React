import React from 'react';
import styled from 'styled-components';
import TopMain from './TopMain';
import MidMain from './MidMain';
import LowMain from './LowMain';


function Main() {
  const Nav = styled.div`
  color:red;
  `;

  return(
    <div>
    <div><TopMain/></div>
    <div><MidMain/></div>
    <div><LowMain/></div>
    </div>
  )
}


export default Main;
