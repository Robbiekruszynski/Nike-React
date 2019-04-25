import React from 'react';
import styled from 'styled-components';
import TopMain from './TopMain';
import MidMain from './MidMain';
import LowMain from './LowMain';


function Main() {
  const Main = styled.div`
  width: 100vw;

  `;

  return(
    <div>
    <Main><TopMain/></Main>
    <Main><MidMain/></Main>
    <Main><LowMain/></Main>
    </div>
  )
}


export default Main;
