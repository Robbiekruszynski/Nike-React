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
      userName: null,
      userEmail: null,

    };
    this.handleTextVisible = this.handleTextVisible.bind(this);
    // this.handleUserName = this.handleUserName.bind(this);
    // this.handleUserEmail = this.handleUserEmail.bind(this);

  }

  handleTextVisible() {
    this.props.changeVisibility();

  }

  render(){
    const NavStyle = styled.div`
    /* border:1px solid green; */
    `;


  return (
    <div>
    <NavStyle><TopNav onTextVisible={this.handleTextVisible}/></NavStyle>
    <NavStyle><MidNav/></NavStyle>
    <NavStyle><BottomNav onTextVisible={this.props.textVisibleOnPage}/></NavStyle>
    </div>
    )
  }
}

Nav.propTypes = {
  onTextVisible:PropTypes.bool
};

export default Nav;
