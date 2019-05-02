import React from 'react';
import styled from 'styled-components';
import TopMain from './TopMain';
import MidMain from './MidMain';
import LowMain from './LowMain';


function Main(props) {
  const MainStyle = styled.div`
  width: 100vw;

  `;

  function handleTextVisible() {
    console.log(props);
    props.changeVisibility();

  }

  return(
    <div>
    <MainStyle><TopMain/></MainStyle>
    <MainStyle><MidMain/></MainStyle>
    <MainStyle><LowMain/></MainStyle>
    </div>
  )
}


export default Main;
