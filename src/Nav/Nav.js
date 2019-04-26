import React from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';
import MidNav from './MidNav';
import BottomNav from './BottomNav';
import PropTypes from 'prop-types';


export class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textVisibleOnPage: false
    };
    this.handleTextVisible = this.handleTextVisible.bind(this);
  }

  handleTextVisible() {
    this.setState( prevState => ({
      textVisibleOnPage: !prevState.textVisibleOnPage
    }));
  }

  render(){
    const Nav = styled.div`
    /* border:1px solid green; */
    `;

  return (
    <div>
    <Nav><TopNav onTextVisible={this.handleTextVisible}/></Nav>
    <Nav><MidNav/></Nav>
    <Nav><BottomNav onTextVisible={this.state.textVisibleOnPage}/></Nav>
    </div>
    )
  }
}

Nav.propTypes = {
  onTextVisible:PropTypes.bool
};

export default Nav;
