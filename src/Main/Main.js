import React from 'react';
import styled from 'styled-components';
import TopMain from './TopMain';
import MidMain from './MidMain';
import LowMain from './LowMain';


function Main() {
  const Main = styled.div`
  border:1px solid blue;
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
