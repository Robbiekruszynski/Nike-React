import React from 'react';
import styled from 'styled-components';
import TopMain from './TopMain';
import MidMain from './MidMain';
import LowMain from './LowMain';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.menu = {
      display: "none"
    }
    this.state = {
      activeClass: false
    }
    this.extend = this.extend.bind(this);
  }
  extend() {
    if (this.state.activeClass === false){
      this.setState({activeClass: true})
    }
    else {
      this.setState({activeClass: false})
    }
  }
render() {
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
